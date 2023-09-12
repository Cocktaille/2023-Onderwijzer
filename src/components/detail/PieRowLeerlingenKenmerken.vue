<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartData } from "@/stores/chartData.js"
import { useChartOptionsStore } from "@/stores/chartOptions.js"
import { usePopperStore } from "@/stores/popperStore.js"

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
    <div class="pie-row-wrapper">
        <div class=" mt-4">
            <strong>&bull; Spreekt thuis geen Nederlands</strong>
        </div>

        <div class="pie-row" >
            <div class=" pie-height text-center pie-left-col  " >
                <Pie :data="chartDataStore.llnKenmerkenThuisTaal" :options="chartOptionsStore.pieOptions"  />
                <div class=" text-md text-in-pie brands-font-primary " >
                    {{ parseFloat(baseStore.chosenSchoolDetail.Thuistaal_procent.replace(/,/, '.')).toFixed(1) }}%
                </div>
                <div class="accent-color-pink text-md text-center text-accent-blue ">
                    {{ baseStore.chosenSchoolDetail.Thuistaal }} leerlingen
                </div>
            </div>
            <div class="pie-right-col" >
                <div class=" text-md mt-3 mb-3 text-left">
                    <em>Vlaams gemiddelde</em>
                </div>
                <div class="flex-container">
                    <div class="flex-items " >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenGemiddeldThuisTaalAso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenGemiddeldThuisTaalAso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            ASO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenGemiddeldThuisTaalTso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenGemiddeldThuisTaalTso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            TSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenGemiddeldThuisTaalBso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenGemiddeldThuisTaalBso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            BSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenGemiddeldThuisTaalKso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenGemiddeldThuisTaalKso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            KSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenGemiddeldThuisTaalMiddenschool.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenGemiddeldThuisTaalMiddenschool" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            Midden school
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>

             


    </div>

    <div class="pie-row-wrapper">
        <div class=" mt-4">
            <strong>&bull; Heeft een laagopgeleide moeder</strong>
        </div>

        <div class="pie-row" >
            <div class=" pie-height text-center pie-left-col  " >
                <Pie :data="chartDataStore.llnKenmerkenOpleiding_moeder" :options="chartOptionsStore.pieOptions"  />
                <div class=" text-md text-in-pie brands-font-primary " >
                    {{ parseFloat(baseStore.chosenSchoolDetail.Opleiding_moeder_procent.replace(/,/, '.')).toFixed(1) }}%
                </div>
                <div class="accent-color-pink text-md text-center text-accent-blue ">
                    {{ baseStore.chosenSchoolDetail.Opleiding_moeder }} leerlingen
                </div>
            </div>
            <div class="pie-right-col" >
                <div class=" text-md mt-3 mb-3 text-left">
                    <em>Vlaams gemiddelde</em>
                </div>
                <div class="flex-container">
                    <div class="flex-items " >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenOpleiding_moederAso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenOpleiding_moederAso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            ASO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenOpleiding_moederTso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenOpleiding_moederTso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            TSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenOpleiding_moederBso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenOpleiding_moederBso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            BSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenOpleiding_moederKso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenOpleiding_moederKso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            KSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenOpleiding_moederMiddenschool.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenOpleiding_moederMiddenschool" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            Midden school
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>

             


    </div>



    <div class="pie-row-wrapper">
        <div class=" mt-4">
            <strong>&bull; Krijgt een schooltoeslag</strong>
        </div>

        <div class="pie-row" >
            <div class=" pie-height text-center pie-left-col  " >
                <Pie :data="chartDataStore.llnKenmerkenSchooltoelage" :options="chartOptionsStore.pieOptions"  />
                <div class=" text-md text-in-pie brands-font-primary " >
                    {{ parseFloat(baseStore.chosenSchoolDetail.Schooltoelage_procent.replace(/,/, '.')).toFixed(1) }}%
                </div>
                <div class="accent-color-pink text-md text-center text-accent-blue ">
                    {{ baseStore.chosenSchoolDetail.Schooltoelage }} leerlingen
                </div>
            </div>
            <div class="pie-right-col" >
                <div class=" text-md mt-3 mb-3 text-left">
                    <em>Vlaams gemiddelde</em>
                </div>
                <div class="flex-container">
                    <div class="flex-items " >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenSchooltoelageAso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenSchooltoelageAso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            ASO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenSchooltoelageTso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenSchooltoelageTso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            TSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenSchooltoelageBso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenSchooltoelageBso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            BSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenSchooltoelageKso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenSchooltoelageKso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            KSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenSchooltoelageMiddenschool.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenSchooltoelageMiddenschool" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            Midden school
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>

             


    </div>


    <div class="pie-row-wrapper">
        <div class=" mt-4">
            <strong>&bull; Woont in een buurt met veel schoolse vertraging</strong>
        </div>

        <div class="pie-row" >
            <div class=" pie-height text-center pie-left-col  " >
                <Pie :data="chartDataStore.llnKenmerkenBuurt" :options="chartOptionsStore.pieOptions"  />
                <div class=" text-md text-in-pie brands-font-primary " >
                    {{ parseFloat(baseStore.chosenSchoolDetail.Buurt_procent.replace(/,/, '.')).toFixed(1) }}%
                </div>
                <div class="accent-color-pink text-md text-center text-accent-blue ">
                    {{ baseStore.chosenSchoolDetail.Buurt }} leerlingen
                </div>
            </div>
            <div class="pie-right-col" >
                <div class=" text-md mt-3 mb-3 text-left">
                    <em>Vlaams gemiddelde</em>
                </div>
                <div class="flex-container">
                    <div class="flex-items " >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenBuurtAso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenBuurtAso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            ASO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenBuurtTso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenBuurtTso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            TSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenBuurtBso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenBuurtBso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            BSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenBuurtKso.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenBuurtKso" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            KSO
                        </div>
                    </div>
                    <div class="flex-items" >
                        <div class="text-center text-md text-bold text-accent-blue">
                            {{ chartDataStore.llnKenmerkenBuurtMiddenschool.datasets[0].data[0] }}%
                        </div>
                        <Pie :data="chartDataStore.llnKenmerkenBuurtMiddenschool" :options="chartOptionsStore.pieOptions"  />
                        <div class="text-center text-md text-bold text-accent-blue">
                            Midden school
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>

             


    </div>


</template>

<style scoped>



.pie-left-col {
    min-width:30%; 
    margin-right:0%; 
    float:left; 
    height:150px;
    border-right: 1px dashed #ccc;
    
}

.pie-right-col {
    margin-left:35%
    
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
}

.flex-items {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;

  margin-bottom:20px;
  width:12%; 
  min-width:60px; 
  max-width:100px;
}




@media screen and (max-width: 650px) {
    .flex-container {
        justify-content: flex-start;
    }
    .pie-left-col {
        margin-right:5%;
        border-right: 0px dashed #ccc;
    }
    /* .text-in-pie {
        margin-top: 0rem;
        width: 100%;
        font-family: produkt;
        font-size: 1.2rem !important;
    } */

}


@media screen and (max-width: 450px) {
    .pie-left-col {
        width:120px; 
        margin-right:5%; 
    }
}
</style>