<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartOptionsStore } from "@/stores/chartOptions.js"
import { usePopperStore } from "@/stores/popperStore.js"

import LeesOok from '@/components/LeesOok.vue'
import GeenCijfersBeschikbaar from '@/components/detail/GeenCijfersBeschikbaar.vue'
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




const ophunjaar = ref({
    datasets: [
        {
            backgroundColor: ['#ef83f6', '#f4e7f9'],
            hoverBackgroundColor: ['#ef83f6', '#f4e7f9'],
            data: [
                parseFloat(baseStore.chosenSchoolDetail.Normaal_procent.replace(/,/, '.')).toFixed(1), 
                100 - parseFloat(baseStore.chosenSchoolDetail.Normaal_procent.replace(/,/, '.')).toFixed(1)],
            datalabels: {
                display: false,
            }  
        }
    ],
})

const eenjaarachter = ref({
    datasets: [
        {
            backgroundColor: ['#ef83f6', '#f4e7f9'],
            hoverBackgroundColor: ['#ef83f6', '#f4e7f9'],
            data: [
                parseFloat(baseStore.chosenSchoolDetail.Een_jaar_achter_procent.replace(/,/, '.')).toFixed(1), 
                100 - parseFloat(baseStore.chosenSchoolDetail.Een_jaar_achter_procent.replace(/,/, '.')).toFixed(1)],
            datalabels: {
                display: false,
            }  
        }
    ],
})

const tweejaarachter = ref({
    datasets: [
        {
            backgroundColor: ['#ef83f6', '#f4e7f9'],
            hoverBackgroundColor: ['#ef83f6', '#f4e7f9'],
            data: [
                parseFloat(baseStore.chosenSchoolDetail.Twee_jaar_achter_procent.replace(/,/, '.')).toFixed(1), 
                100 - parseFloat(baseStore.chosenSchoolDetail.Twee_jaar_achter_procent.replace(/,/, '.')).toFixed(1)],
            datalabels: {
                display: false,
            }  
        }
    ],
})

const meerdantweejaarachter = ref({
    datasets: [
        {
            backgroundColor: ['#ef83f6', '#f4e7f9'],
            hoverBackgroundColor: ['#ef83f6', '#f4e7f9'],
            data: [
                parseFloat(baseStore.chosenSchoolDetail.meer_dan_2_jaar_achter_procent.replace(/,/, '.')).toFixed(1), 
                100 - parseFloat(baseStore.chosenSchoolDetail.meer_dan_2_jaar_achter_procent.replace(/,/, '.')).toFixed(1)],
            datalabels: {
                display: false,
            }  
        }
    ],
})

const voorlopen_ophunjaar = ref({
    datasets: [
        {
            backgroundColor: ['#ef83f6', '#f4e7f9'],
            hoverBackgroundColor: ['#ef83f6', '#f4e7f9'],
            data: [
                parseFloat(baseStore.chosenSchoolDetail.Een_of_meer_voor_procent.replace(/,/, '.')).toFixed(1), 
                100 - parseFloat(baseStore.chosenSchoolDetail.Een_of_meer_voor_procent.replace(/,/, '.')).toFixed(1)],
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
                
                <h3 class="d-inline brands-font-primary text-nm brands-text-color-primary ">
                    Hoeveel leerlingen lopen voor of achter ten opzichte van hun leeftijd?
                </h3> 

                <ToolTipper :tekst="popperStore.tooltip1" />
            </div>
             
            <div v-if="baseStore.showDetailItem == item" >
                <div v-if="baseStore.chosenSchoolDetail.Normaal_procent != 'Geen cijfers beschikbaar' ">
                    <div class="row  mb-4 mt-0 text-center" style="white-space: nowrap;">
                        <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                            <div class=" text-md ">
                                Op hun jaar
                            </div>
                            <Pie :data="ophunjaar" :options="chartOptionsStore.pieOptions"  />
                            <div class=" text-md text-in-pie brands-font-primary" >
                                {{ parseFloat(baseStore.chosenSchoolDetail.Normaal_procent.replace(/,/, '.')).toFixed(1) }}%
                            </div>
                            <div class="accent-color-pink text-md ">
                                {{ baseStore.chosenSchoolDetail.Normaal }} leerlingen
                            </div>
                        </div>
                        <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                            <div class=" text-md ">
                                1 jaar achter
                            </div>
                            <Pie :data="eenjaarachter" :options="chartOptionsStore.pieOptions"  />
                            <div class="text-md text-in-pie brands-font-primary" >
                                {{ parseFloat(baseStore.chosenSchoolDetail.Een_jaar_achter_procent.replace(/,/, '.')).toFixed(1) }}%
                            </div>
                            <div class="accent-color-pink  text-md ">
                                {{ baseStore.chosenSchoolDetail.Een_jaar_achter }} leerlingen
                            </div>
                        </div>
                        <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                            <div class=" text-md ">
                                2 jaar achter
                            </div>
                            <Pie :data="tweejaarachter" :options="chartOptionsStore.pieOptions"  />
                            <div class=" text-md text-in-pie brands-font-primary" >
                                {{ parseFloat(baseStore.chosenSchoolDetail.Twee_jaar_achter_procent.replace(/,/, '.')).toFixed(1) }}%
                            </div>
                            <div class="accent-color-pink text-md ">
                                {{ baseStore.chosenSchoolDetail.Twee_jaar_achter }} leerlingen
                            </div>
                        </div>
                        <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                            <div class=" text-md ">
                                > 2 jaar achter
                            </div>
                            <Pie :data="meerdantweejaarachter" :options="chartOptionsStore.pieOptions"  />
                            <div class="text-md text-in-pie brands-font-primary" >
                                {{ parseFloat(baseStore.chosenSchoolDetail.meer_dan_2_jaar_achter_procent.replace(/,/, '.')).toFixed(1) }}%
                            </div>
                            <div class="accent-color-pink text-md ">
                                {{ baseStore.chosenSchoolDetail.meer_dan_2_jaar_achter }} leerlingen
                            </div>
                        </div>
                        <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                            <div class="text-md ">
                                1+ jaren voor
                            </div>
                            <Pie :data="voorlopen_ophunjaar" :options="chartOptionsStore.pieOptions"  />
                            <div class="text-md text-in-pie brands-font-primary" >
                                {{ parseFloat(baseStore.chosenSchoolDetail.Een_of_meer_voor_procent.replace(/,/, '.')).toFixed(1) }}%
                            </div>
                            <div class="accent-color-pink text-md ">
                                {{ baseStore.chosenSchoolDetail.Een_of_meer_voor }} leerlingen
                            </div>
                        </div>
                        
                    </div>
                </div>

                <GeenCijfersBeschikbaar v-else />


                <div class="mb-3 mt-5 text-accent-blue">
                    <strong>Gemiddeld resultaat van vergelijkbare scholen</strong>&nbsp;<ToolTipper :tekst="popperStore.tooltip1" />
                </div>

                Hier moet nog gemiddelde komen. Dit hele blok moet ook nog aangepast worden met de data uit chartData.js

                <LeesOok :articlePositions="[7,8]" />
            </div>
        </div>
        

    </div>
</template>

<style scoped>

@media screen and (max-width: 650px) {
.text-in-pie {margin-top: 0rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.2rem !important;
}
.accent-color-pink {color:#ef83f6}

}
</style>