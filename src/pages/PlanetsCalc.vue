<template>
  <div class="wrap">
    <div class="container">

      <calculator
        v-model:input="input"
        :stack-chars="stackChars"
        :calc-total="calcTotal"
        local-storage-key="planetsCalc"
        title-key="PLANETS_CALC"
        @setup="setupCalculator"
      />

      <v-data
        :data="{TID: 'INPUT_VALUES', Name: 'Input', TID2: planetValues.map((e) => e.TID)}"
        :table-opts="{lvlColKey: '№', mergeCells: false}"
      >

        <template #table-head>
          <th v-t="'CURRENT_LVL'" />
          <th v-t="'PLAN_LVL'" />
          <th />
        </template>

        <template #table-body="{ row }">
          <td
            v-for="type in Object.keys(input)"
            :key="type"
          >
            <select
              class="select"
              @change="calc.onChangeLvl(type, planetValues[row].Name, $event.target.value)"
            >
              <option
                v-for="(i, index) in (planetValues[row].MaxUpgradeLevel + 1)"
                :key="type + i"
                :selected="calc.isSelected(type, planetValues[row].Name, index)"
                :disabled="calc.isDisabled(type, planetValues[row].Name, index)"
              >{{ index }}
              </option>
            </select>
          </td>
          <td>
            <div @click="() => openModuleInfo(planetValues[row])">
              <img
                src="../img/icons/info.png"
                class="open-info"
              >
            </div>
          </td>
        </template>

      </v-data>

    </div>

    <modal
      v-model:open="openModal"
      v-bind="modalOpts"
    >
      <template #body>
        <div class="modal-module">
          <ul class="chars">
            <li class="output">
              <b>{{ $t('TID_PLANET_LEVEL_DESCR') }}</b>
              <div>
                <span
                  v-for="type of Object.keys(input)"
                  :key="type"
                  :class="outputClasses(type, null)"
                >
                  {{ input[type]?.[modalOpts.data.key] }}
                </span>
              </div>
            </li>
            <li
              v-for="key in Object.keys(calc.output.plan[modalOpts.data.key] || {}).filter(k => !hideKeys.includes(k))"
              :key="key"
              class="calc.output"
            >
              <b>{{ format.key(key) }}</b>
              <div>
                <span
                  v-for="type of Object.keys(input)"
                  :key="type"
                  :class="outputClasses(type, key)"
                >
                  {{ format.value(key, Math.trunc(calc.output[type]?.[modalOpts.data.key]?.[key]) || undefined) }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import levels from '@Data/planet_levels.js';
import planetsData from '@Data/planets.js';
import spaceBuildings from '@Data/spacebuildings.js';

import Calculator from '@/components/Calculator.vue';
import VData from '@/components/Data.vue';
import Modal, { SIZES } from '@/components/Modal.vue';

import type { Input, Element, ElementsStore, Output } from '../composables/calculator';
import type { ProvideGetterElementsCB, Setup } from '@/components/Calculator.vue';
import key from '@Handlers/key.js';
import value from '@Handlers/value.js';
import objectArrayify from '../js/objectArrayify';
import getFilterByType from '../js/getFilterByType';

const CHARS_MODIFIERS: Record<string, string> = {
    CreditStorage: 'CreditStorageModifier',
    FuelStorage: 'FuelStorageModifier',
    CreditsPerHour: 'CreditIncomeModifier',
    FuelPerHour: 'FuelIncomeModifier',
    ShipmentsCRValuePerDay: 'CreditShipmentModifier',
};
const KEYS_ALIASES_TS: Record<string, string> = {
    TotalShipmentCRPerDay: 'ShipmentsCRValuePerDay',
    Cost: 'Cost',
    ConstructionTime: 'TimeToUpgrade',
};
const STACK_CHARS = ['XPAward', 'Cost', 'TimeToUpgrade', 'RSLevelReq'];
const HIDE_LVL_CHARS = ['CrystalsWeight', 'Name', 'ShipmentsHydroValuePerDay'];
const TOTAL_KEYS = Object.keys(levels)
    .filter((k) => ![...STACK_CHARS, ...HIDE_LVL_CHARS].includes(k));

export default defineComponent({
    components: { Calculator, VData, Modal },
    data() {
        return {
            input: { actually: {}, plan: {} } as Input,
            calc: {} as Setup,
            hideKeys: HIDE_LVL_CHARS,
            stackChars: STACK_CHARS,
            planets: {},

            openModal: false,
            modalOpts: {
                size: SIZES.SMALL,
                title: 'name',
                data: {
                    planet: {} as Element,
                    get key() {
                        return this.planet.Name;
                    },
                },
            },

            format: {
                key: (k: string) => key(k, this.$route.name),
                value: (k: string, v: unknown) => value(k, v, null),
            },
        };
    },
    computed: {
        planetValues(): unknown[] {
            return Object.values(this.planets);
        },
    },
    methods: {
        setupCalculator(v: Setup) {
            this.calc = v;
            this.planets = v.provideGetterElements(getPlanets as ProvideGetterElementsCB) as object;
        },

        openModuleInfo(planet: Element) {
            this.modalOpts.title = this.$t(planet.TID as string) + ((/_\d$/.test(planet.Name)) ? planet.Name.replace(/.+?_(\d)$/, ' $1') : '');
            this.modalOpts.data.planet = planet;
            this.openModal = true;
        },
        outputClasses(type: keyof Output, charName?: string): object {
            return this.calc.outputClasses(type, this.modalOpts.data.key, charName);
        },

        calcTotal(store: ElementsStore, output: Output) {
            let RSLevelReq = 0;
            for (const k of TOTAL_KEYS) {
                output.total.intermediate[k] = {
                    actually: 0,
                    plan: 0,
                    sum: 0,
                };
            }

            return function(name: string, input: Input) {
                for (const k of TOTAL_KEYS) {
                    output.total.intermediate[k].actually += output.actually[name]?.[k] as number || 0;
                    output.total.intermediate[k].plan += output.plan[name]?.[k] as number || 0;
                    output.total.intermediate[k].sum = output.total.intermediate[k].actually + output.total.intermediate[k].plan;
                }


                if (store[name].RSLevelReq) {
                    const localeRSLevelReq = (store[name].RSLevelReq as number[])[input.plan[name]] || 0;
                    RSLevelReq = output.total.result.RSLevelReq = (RSLevelReq < localeRSLevelReq) ? localeRSLevelReq : RSLevelReq;
                }
            };
        },
    },
});

function getPlanets(...[TIDs, getChars, elements]: Parameters<ProvideGetterElementsCB>) {
    type TS = {
        Name: string,
        MaxUpgradeLevel: number,
        MaxOnOwnSolarSystem: number
    }
    let tsMaxLvl = 0;
    const filteredLevels = objectArrayify(levels, {
        filter: ([, v]: [string, unknown]) => Array.isArray(v),
    });

    const planets = objectArrayify(planetsData, {
        ...getFilterByType('planets.yellowstar'),
        map: ([name, planet]: [string, Element]) => {
            elements[name] = objectArrayify(filteredLevels, {
                map: ([k, v]: [string, number[]]) => {
                    const MaxUpgradeLevel = planet.MaxUpgradeLevel as number;
                    const res = v.map((e) => e * ((k in CHARS_MODIFIERS) ? (planet[CHARS_MODIFIERS[k]] as number) / 100 : 1));

                    if (res.length < MaxUpgradeLevel) {
                        res.push(...Array.from({ length: MaxUpgradeLevel - res.length }, () => res[res.length - 1]));
                    }
                    return [k, res];
                },
            }) as Element;

            TIDs[name] = planet.TID;

            return [name, planet];
        },
    }) as {[k: string]: unknown};
    const TradingStation = objectArrayify(spaceBuildings.TradingStation, {
        map: ([k, v]: [string, unknown]) => {
            if (Array.isArray(v) && v.length > tsMaxLvl) {
                tsMaxLvl = v.length;
            }
            return [(k in KEYS_ALIASES_TS) ? KEYS_ALIASES_TS[k] : k, v];
        },
    }) as TS;
    TradingStation.MaxUpgradeLevel = tsMaxLvl;

    for (let i = 0; TradingStation.MaxOnOwnSolarSystem > i; i++) {
        const ts = { ...TradingStation, Name: `${TradingStation.Name}_${i}` };

        planets[ts.Name] = ts;
        elements[ts.Name] = getChars(ts, tsMaxLvl);
    }

    return planets;
}
</script>

<style scoped lang="scss">
@use "sass:map";

@import "../style/vars";
@import "../style/calculator";

.wrap {
    display: flex;
    justify-content: center;
    margin: 0 2%;

    .container {
        width: 100%;
        max-width: 1000px;
    }
}

.select {
    font-size: 140%;
    background-color: map.get($table, "background");
    border-color: map.get($table, "background");

    option:disabled {
        color: #0e1315;
    }
}
.open-info {
    width: 25px;
    cursor: pointer;
}
.modal-module {
    .chars li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2%;

        &.output {
            font-size: 100%;

            @media screen and (max-width: 960px){
                font-size: 80%;
            }
        }
    }
}

</style>
