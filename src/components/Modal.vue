<template>
  <div>

    <teleport
      :disabled="!modalActive"
      to="#modals"
    >
      <transition name="background">
        <div
          v-if="modalActive"
          class="background fixed"
          @click="onClose"
        />
      </transition>
    </teleport>

    <teleport
      :disabled="!modalActive"
      to="#modals"
    >
      <slot name="default">

        <transition name="content-wrapper">
          <div
            v-if="modalActive"
            class="content-wrapper fixed"
          >
            <div :class="['content', `size-${size}`]">

              <div class="head">
                <div
                  class="close-button"
                  @click="onClose"
                />
                <slot name="head">
                  <h2> {{ title }} </h2>
                </slot>
              </div>

              <div class="body">
                <slot name="body" />
              </div>

            </div>

          </div>
        </transition>

      </slot>
    </teleport>

  </div>
</template>

<script>
import types from '@Store/types';

export const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};

export default {
    name: 'Modal',
    props: {
        size: {
            type: String,
            default: SIZES.MEDIUM,
        },
        title: {
            type: String,
            default: undefined,
        },
        open: Boolean,
    },
    emits: ['update:open'],
    data() {
        return {
            modalKey: 0,
        };
    },
    computed: {
        modalActive() {
            return this.open && (this.$store.state.modals.at(- 1) == this.modalKey);
        },
    },
    watch: {
        open() {
            if (this.open) {
                this.$store.dispatch(types.MODAL_OPEN).then((key) => {
                    this.modalKey = key;
                });
            } else {
                this.$store.dispatch(types.MODAL_CLOSE, this.modalKey);
            }
        },
    },
    unmounted() {
        this.$store.dispatch(types.MODAL_CLOSE, this.modalKey);
    },
    created() {
        this.$router.beforeResolve( () => {
            if (this.modalActive) {
                this.onClose();
                return false;
            }
        });
    },
    methods: {
        onClose() {
            this.$emit('update:open', false);
        },
    },
};
</script>

<style scoped lang="scss">
@import "../style/vars";

$mv: 1000px;
$border-color: #aee3fc;

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.background {
    background-color: rgba(0, 0, 0, 0.6);

    &-enter-active, &-leave-active {
        transition: background-color 400ms linear;
    }

    &-enter-from, &-leave-to {
        background-color: rgba(0, 0, 0, 0.0);

    }
}

.content-wrapper {
    display: flex;
    justify-content: center;
    pointer-events: none;

    @media screen and (max-width: 1000px){
        align-items: center;
    }

    .content {
        background: $background;
        border: $border-color solid 1px;
        border-radius: 5px;
        pointer-events: all;
        height: max-content;
        width: 90%;
        margin-top: 5%;

        &.size {
            &-medium {
                max-width: 500px;
                min-height: 50%;

                @media screen and (max-width: 1000px){
                    min-height: 80%;
                }
            }
            &-small {
                max-width: 450px;
            }
            &-large {
                min-height: 80%;

                .head {
                    padding-bottom: 0;
                }
            }
        }

        .head {
            padding-bottom: 5%;
            position: relative;

            .close-button {
                position: absolute;
                right: 0;
                background: url(../img/icons/close.svg) no-repeat;
                width: 52px;
                height: 35px;
                cursor: pointer;
            }
            h2 {
                padding: 15px 52px 0;
                text-align: center;
            }
        }

        .body {
            padding: 5%;
        }
    }

    &-enter-active, &-leave-active {
        transform: scale(1);
        transition: 700ms ease, transform 350ms
    }
    &-enter-from, &-leave-to {
        opacity: 0;
        transform: scale(0.6);
        transition: 550ms ease, transform 300ms, opacity 200ms;
    }
}
</style>
