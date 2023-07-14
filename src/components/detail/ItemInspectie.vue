<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useChartOptionsStore } from "@/stores/chartOptions.js"
import { usePopperStore } from "@/stores/popperStore.js"

import LeesOok from '@/components/LeesOok.vue'
import ToolTipper from '@/components/ToolTipper.vue'




const baseStore = useBaseStore();
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
                
                <h3 class="d-inline brand-font-primary text-nm brand-text-color-primary ">
                    Advies van de onderwijsinspectie
                </h3> 

                <ToolTipper :tekst="popperStore.tooltip1" />
            </div>
             
            <div v-if="baseStore.showDetailItem == item" >

                <div class="mt-3">
                    <strong>{{baseStore.chosenSchoolDetail.advies}}</strong>
                </div> 

                <div class="mt-0 text-md">
                    <span v-if="baseStore.chosenSchoolDetail.inspectiejaar != '' ">Inspectiejaar:</span> {{baseStore.chosenSchoolDetail.inspectiejaar}}
                </div>

                <div class="mt-3">
                    Via  <a :href="baseStore.chosenSchoolDetail.Link" target="_blank">deze link</a> vind je het volledige inspectierapport. Hier staan ook alle studierichtingen die de school aanbiedt. 
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

</style>