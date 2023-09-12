<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartData } from "@/stores/chartData.js"
import { useChartOptionsStore } from "@/stores/chartOptions.js"
import { usePopperStore } from "@/stores/popperStore.js"

import LeesOok from '@/components/LeesOok.vue'
import ToolTipper from '@/components/ToolTipper.vue'
import PieRowLeerlingenKenmerken from '@/components/detail/PieRowLeerlingenKenmerken.vue'



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
                    Leerlingenkenmerken die een mogelijke invloed hebben op de schoolloopbaan
                </h3> 

                <ToolTipper :tekst="popperStore.tooltip1" />
            </div>
             
            <div v-if="baseStore.showDetailItem == item" >

                <PieRowLeerlingenKenmerken />

                <LeesOok :articlePositions="[9,10]" />


                



                
                

                


                


            </div>
        </div>
        

    </div>
</template>

<style scoped>





</style>
