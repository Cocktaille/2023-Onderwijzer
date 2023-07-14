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
                <div class="row  mb-4 mt-0 text-center" style="white-space: nowrap;">
                    <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                        <div class=" text-md ">
                            Op hun jaar
                        </div>
                        <Pie :data="ophunjaar" :options="chartOptionsStore.pieOptions"  />
                        <div class=" text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
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
                        <div class=" text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
                            {{ parseFloat(baseStore.chosenSchoolDetail.Een_of_meer_voor_procent.replace(/,/, '.')).toFixed(1) }}%
                        </div>
                        <div class="accent-color-pink text-md ">
                            {{ baseStore.chosenSchoolDetail.Een_of_meer_voor }} leerlingen
                        </div>
                    </div>
                    
                </div>


                <div class="mb-3 mt-5">
                    <strong>Gemiddeld resultaat van vergelijkbare scholen</strong> <ToolTipper :tekst="popperStore.tooltip1" />
                </div>

                <div class="row  mb-4 mt-0 text-center" style="white-space: nowrap;">
                    <div class="col-3 col-sm-2 col-md-2  mt-4 p-0 pie-wrapper pie-height">
                        <div class=" text-md ">
                            Op hun jaar
                        </div>
                        <Pie :data="ophunjaar" :options="chartOptionsStore.pieOptions"  />
                        <div class=" text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
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
                        <div class=" text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
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
                        <div class="text-md text-in-pie " >
                            {{ parseFloat(baseStore.chosenSchoolDetail.Een_of_meer_voor_procent.replace(/,/, '.')).toFixed(1) }}%
                        </div>
                        <div class="accent-color-pink text-md ">
                            {{ baseStore.chosenSchoolDetail.Een_of_meer_voor }} leerlingen
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
        

    </div>
</template>

<style scoped>
.item {background:#ffffff; padding:15px 20px; border-bottom:1px solid #e5e7eb}
.item.item-open {background:#f7f9ff}

.bar-height {max-height:200px; }
.pie-height {min-height:140px}

.text-in-pie {margin-top: -5.2rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.3rem !important;
}





@media screen and (max-width: 800px) {
    .text-in-pie {margin-top: -5rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
}
}

@media screen and (max-width: 650px) {
    .text-in-pie {margin-top: -4.5rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
}
}

@media screen and (max-width: 574px) {
    .bar-height {max-height:200px; margin-bottom:50px }
    .text-in-pie {margin-top: -4.5rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
}
}

/* @media screen and (max-width: 474px) {
    .bar-height {max-height:200px; margin-bottom:50px }
    .text-in-pie {margin-top: -4.0rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.0rem !important;
}
} */

@media screen and (max-width: 650px) {
    .text-in-pie {margin-top: 0rem;
    width: 100%;
    font-family: produkt;
    font-size: 1.2rem !important;
}
.accent-color-pink {color:#ef83f6}
#messagentWrap .pie-wrapper {margin:10px !important;}
}
</style>