<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartOptionsStore } from "@/stores/chartOptions.js"
import { usePopperStore } from "@/stores/popperStore.js"

import LeesOok from '@/components/LeesOok.vue'
import ToolTipper from '@/components/ToolTipper.vue'



import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
  
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels )


const baseStore = useBaseStore();
const chartOptionsStore = useChartOptionsStore();
const popperStore = usePopperStore();

const props = defineProps({
  item: String,
})




const dataLeerlingenBehalenABC = ref({
        
        labels: [
            ['A-attest', baseStore.chosenSchoolDetail.Aantal_A_attest + ' lln'], 
            ['B-attest', baseStore.chosenSchoolDetail.Aantal_B_attest + ' lln'],
            ['C-attest', baseStore.chosenSchoolDetail.Aantal_C_attest + ' lln']
        ], /*hidden in settings */
        datasets: [
            
            { 
            data: 
                [ 
                    parseFloat(baseStore.chosenSchoolDetail.A_procent.replace(/,/, '.')).toFixed(1), 
                    parseFloat(baseStore.chosenSchoolDetail.B_procent.replace(/,/, '.')).toFixed(1), 
                    parseFloat(baseStore.chosenSchoolDetail.C_procent.replace(/,/, '.')).toFixed(1)
                ],
                backgroundColor: '#F75821',
                hoverBackgroundColor: "#F75821",
                datalabels: {
                    formatter: function(value, context) {
                        return value + "%" ;
                    },
                    align: 'end',
                    anchor: 'end',
                    font: {
                        size: 11,
                        weight: 'bold',
                    },
                    backgroundColor: '#ffffff',
                    opacity:0.7
                    
                },

                

            },
            { data: 
                [ 
                    100 - parseFloat(baseStore.chosenSchoolDetail.A_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.B_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.C_procent.replace(/,/, '.')).toFixed(1)
                ],
                backgroundColor: "#feebe4",
                hoverBackgroundColor: "#feebe4",
                datalabels: {
                    display: false,
                }
                
            }
        ],
        
        
      });


const vergelijkbareScholenA = ref({
    datasets: [
        {
            backgroundColor: ['#F75821', '#feebe4'],
            hoverBackgroundColor: ['#F75821', '#feebe4'],
            data: [83.33, 100-83.33],
            datalabels: {
                display: false,
            }  
        }
    ],
})
const vergelijkbareScholenB = ref({
    datasets: [
        {
            backgroundColor: ['#F75821', '#feebe4'],
            hoverBackgroundColor: ['#F75821', '#feebe4'],
            data: [5.4, 100-5.4],
            datalabels: {
                display: false,
            }  
        }
    ],
})
const vergelijkbareScholenC = ref({
    datasets: [
        {
            backgroundColor: ['#F75821', '#feebe4'],
            hoverBackgroundColor: ['#F75821', '#feebe4'],
            data: [6.94, 100-6.94],
            datalabels: {
                display: false,
            }  
        }
    ],
})
</script>

<template>
    <div>
        
        
        <div class="item" :class="{'item-open': baseStore.showDetailItem == item }" >
            <div class="cursor-pointer"  @click="baseStore.toggleDetailItem(item)">
                
                <div v-if="baseStore.showDetailItem == item" class="float-right mt-2 ml-4">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div v-else class="float-right mt-2 ml-4">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                
                <h3 class="d-inline brand-font-primary text-nm brand-text-color-primary ">
                    Hoeveel leerlingen behalen A-, B- of C-attest?
                </h3> 

                <ToolTipper :tekst="popperStore.tooltip1" />
            </div>
             
            <div v-if="baseStore.showDetailItem == item" >
                <div class="row mb-3 mt-4" >
                    <div class="col-sm-4 bar-height" >
                        
                        <Bar :data="dataLeerlingenBehalenABC" :options="chartOptionsStore.barOptions" />
                        
                        <div class="rows text-center text-md mt-2">
                            <div class="col-4 float-left">
                                <strong>A-attest</strong><br />
                                {{ baseStore.chosenSchoolDetail.Aantal_A_attest }} lln

                            </div>
                            <div class="col-4 float-left">
                                <strong>B-attest</strong><br />
                                {{ baseStore.chosenSchoolDetail.Aantal_B_attest }} lln

                            </div>
                            <div class="col-4 float-left">
                                <strong>C-attest</strong><br />
                                {{ baseStore.chosenSchoolDetail.Aantal_C_attest }} lln

                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-8 col-md-7 offset-md-1" >
                        <div class="mb-3 mt-3">
                            <strong>Gemiddeld resultaat van vergelijkbare scholen</strong> <ToolTipper :tekst="popperStore.tooltip1" />
                        </div>
    
                        <div class="mb-3" >
                            <div class="row mb-4 " >
                                <div class="col-4 col-md-3" style="height: auto ">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        ??? > ???
                                    </div>
                                    <Pie :data="vergelijkbareScholenA" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold">
                                        A-attest
                                    </div>
                                </div>
                                <div class="col-4 col-md-3" style="height: auto">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        ??? > ???
                                    </div>
                                    <Pie :data="vergelijkbareScholenB" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold">
                                        B-attest
                                    </div>
                                </div>
                                <div class="col-4 col-md-3" style="height: auto">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        ??? > ???
                                    </div>
                                    <Pie :data="vergelijkbareScholenC" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold">
                                        C-attest
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="mt-3 text-sm text-muted">Opgelet: een erg laag cijfer bij A-, B- en C-attesten kan ook voorkomen omdat niet elke leerling een attest krijgt op het einde van het schooljaar, zoals leerlingen in het Onthaalonderwijs voor Anderstalige Nieuwkomers (OKAN). Ook stellen heel wat middenscholen de deliberatie uit tot het einde van het tweede jaar, waardoor de resultaten per jaar automatisch veel lager liggen.</div>
                    </div>
                </div>

<div class="mt-4">
    <LeesOok />
</div>

            </div>
        </div>
        

    </div>
</template>

<style scoped>
.item {background:#ffffff; padding:15px 20px; border-bottom:1px solid #e5e7eb}
.item.item-open {background:#f7f9ff}

.bar-height {max-height:200px; }

@media screen and (max-width: 574px) {
    .bar-height {max-height:200px; margin-bottom:50px }
}
</style>