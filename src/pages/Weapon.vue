<template>
  <ModulePage
    type="Weapon"
    portrait="portrait_WhiteStar"
    :post-filter="postFilter"
  />
</template>

<script>
import ModulePage from '@/components/ModulePage.vue';

export default {
    components: { ModulePage },
    methods: {
        postFilter(data) {
            ['Laser', 'DualLaser']
                .forEach((modKey) => {
                    const mod = { ...data[modKey] };

                    ['RampDPS', 'RampDPS_BLS', 'RampDPS_WS']
                        .forEach((key) => {
                            if (`${key}0` in mod) {
                                mod[key] = {
                                    '0%+': [...mod[`${key}0`]],
                                    '50%+': [...mod[`${key}1`]],
                                    '100%': [...mod[`${key}2`]],
                                };
                                delete mod[`${key}0`];
                                delete mod[`${key}1`];
                                delete mod[`${key}2`];

                                data[modKey] = mod;
                            }
                        });
                });

            return data;
        },
    },
};
</script>
