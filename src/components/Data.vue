<template>
  <div class="container-wrap">
    <div class="container">

      <v-title
        :data="title"
        :format="format"
        :icon-dir="iconDir"
      />

      <v-table
        v-if="table != null"
        v-bind="Object.assign(tableOpts, {data: table, format})"
      >
        <!--         eslint-disable vue/max-attributes-per-line         -->
        <template v-if="$slots['table-head']" #head="p"><slot name="table-head" v-bind="p" /></template>
        <template v-if="$slots['table-body']" #body="p"><slot name="table-body" v-bind="p" /></template>
      </v-table>

    </div>
  </div>
</template>

<script>
import VTable from './DataTable.vue';
import VTitle from './DataHead.vue';

import key from '@Handlers/key.js';
import value from '@Handlers/value.js';
import isHide from '@Handlers/isHide';

import headersOrder from '@Regulation/headersOrder.js';

export default {
    name: 'Data',
    components: { VTable, VTitle },
    props: {
        data: { type: Object, required: true },
        tableOpts: { type: Object, default: () => ({}) },
        sort: { type: Boolean, default: true },
        iconDir: { type: String, default: '' },
    },
    data() {
        return {
            table: {
                head: {},
                body: {},
            },
            title: {},

            format: {
                key: (k) => key(k, this.$route.name),
                value: (k, v) => value(k, v, this?.title.default.Name),
            },
        };
    },
    watch: {
        data() {
            this.table = { head: {}, body: {} };
            this.title = {};

            this.packagingData(this.data);
        },
    },
    created() {
        this.packagingData(this.data);
    },
    methods: {
        packagingData(obj, category = 'default') {
            const preTable = [];
            const preTitle = [];

            Object.entries(obj).forEach(([key, value]) => {
                if (value.constructor === Object) {
                    this.packagingData(value, key);
                } else if (Array.isArray(value)) {
                    if (isHide(key, null, { asTitle: true })) {
                        this.title[key] = value;
                    } else {
                        preTable.push([key, value]);
                    }
                } else {
                    preTitle.push([key, value]);
                }
            });
            this.buildTitle(category, preTitle);
            this.buildTable(category, preTable);
        },
        buildTitle(category, pre) {
            // TODO перенести фильтры из Head сюда
            const { title } = this;

            pre.forEach(([k, v]) => {
                if (!title[category]) {
                    title[category] = {};
                }
                title[category][k] = v;
            });
        },
        buildTable(category, pre) {
            const { table: { head, body } } = this;
            const { Name } = this.data;
            const keys = pre.map(([k]) => k);

            pre
                .filter(([k]) => (keys.includes(`_${k}`)) ? true : !isHide(k, Name))
                .sort(([a], [b]) => this.sort ? headersOrder.indexOf(a) - headersOrder.indexOf(b) : 0)
                .forEach(([key, value]) => {
                    if (Array.isArray(head[category])) {
                        head[category].push(key);
                        body[category].push(value);
                    } else {
                        head[category] = [key];
                        body[category] = [value];
                    }
                });

            if (category === 'default' && Object.keys(head).length === 0) {
                this.table = null;
            }
        },
    },
};
</script>
<style scoped lang="scss">
.container-wrap {
    margin: 3%;
    display: flex;
    justify-content: center;

    .container {
        width: 100%;
    }
}
</style>
