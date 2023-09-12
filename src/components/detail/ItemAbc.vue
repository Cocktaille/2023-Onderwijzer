<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartData } from "@/stores/chartData.js"
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
const chartDataStore = useChartData();
const chartOptionsStore = useChartOptionsStore();
const popperStore = usePopperStore();

const props = defineProps({
  item: String,
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
                
                <h3 class="d-inline brands-font-primary text-nm brands-text-color-primary ">
                    Hoeveel leerlingen behalen A-, B- of C-attest?
                </h3> 

                <ToolTipper :tekst="popperStore.tooltip1" />
            </div>
             
            <div v-if="baseStore.showDetailItem == item" >
                <div class="row mb-3 mt-4" >
                    <div class="col-sm-4 bar-height" >
                        
                        <div v-if="baseStore.chosenSchoolDetail.Aantal_A_attest != 'Geen cijfers beschikbaar'">
                            <Bar :data="chartDataStore.dataLeerlingenBehalenABC" :options="chartOptionsStore.barOptions" />
                            
                            <div class="rows text-center text-md mt-2 text-accent-blue">
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

                        <div v-else class="brands-text-color-primary pt-3">
                            <em>Er zijn geen cijfers voor deze school beschikbaar.</em>
                        </div>

                    </div>
    
                    <div class="col-sm-8 col-md-7 offset-md-1" >
                        <div class="mb-3 mt-3 text-accent-blue">
                            <strong>Gemiddeld resultaat van vergelijkbare scholen</strong> <ToolTipper :tekst="popperStore.tooltip1" />
                        </div>
    
                        <div class="mb-3" >
                            <div class="row mb-4 " >
                                <div class="col-4 col-md-3" style="height: auto ">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        {{baseStore.chosenSchoolDetail.Ondergrens_A}} > {{baseStore.chosenSchoolDetail.Bovengrens_A}}
                                    </div>
                                    <Pie :data="chartDataStore.vergelijkbareScholenA" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold text-accent-blue">
                                        A-attest
                                    </div>
                                </div>
                                <div class="col-4 col-md-3" style="height: auto">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        {{baseStore.chosenSchoolDetail.Ondergrens_B}} > {{baseStore.chosenSchoolDetail.Bovengrens_B}}
                                    </div>
                                    <Pie :data="chartDataStore.vergelijkbareScholenB" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold text-accent-blue">
                                        B-attest
                                    </div>
                                </div>
                                <div class="col-4 col-md-3" style="height: auto">
                                    <div class="text-center text-md text-bold text-accent-orange">
                                        {{baseStore.chosenSchoolDetail.Ondergrens_C}} > {{baseStore.chosenSchoolDetail.Bovengrens_C}}
                                    </div>
                                    <Pie :data="chartDataStore.vergelijkbareScholenC" :options="chartOptionsStore.pieOptions" />
                                    <div class="text-center text-md text-bold text-accent-blue">
                                        C-attest
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="mt-3 text-sm text-muted">Opgelet: een erg laag cijfer bij A-, B- en C-attesten kan ook voorkomen omdat niet elke leerling een attest krijgt op het einde van het schooljaar, zoals leerlingen in het Onthaalonderwijs voor Anderstalige Nieuwkomers (OKAN). Ook stellen heel wat middenscholen de deliberatie uit tot het einde van het tweede jaar, waardoor de resultaten per jaar automatisch veel lager liggen.</div>
                    </div>
                </div>

                <div class="mt-4">
                    <LeesOok :articlePositions="[5,6]" />
                </div>

            </div>
        </div>
        

    </div>
</template>

<style scoped>

</style>