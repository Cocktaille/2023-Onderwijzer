<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"

import ScholenInfo from '@/components/detail/ScholenInfo.vue'
import LoaderSpinner from '@/components/LoaderSpinner.vue'
import ItemAbc from '@/components/detail/ItemAbc.vue'
import ItemVoorlopen from '@/components/detail/ItemVoorlopen.vue'
import ItemLeerlingenKenmerken from '@/components/detail/ItemLeerlingenKenmerken.vue'
import ItemInspectie from '@/components/detail/ItemInspectie.vue'
import LeesWijzer from '@/components/detail/LeesWijzer.vue'


const baseStore = useBaseStore();



</script>

<template>
    <div>
        <div v-if="baseStore.chosenSchoolDetail == undefined">
            <LoaderSpinner 
                text="Even geduld" 
                spinnerColor="#29ABE2"
                ringColor="#efefef"
            />
        </div>

        <div v-if="baseStore.chosenSchoolDetail != undefined">
            
            <ScholenInfo />

            <div class="">
                <ItemAbc :item="'abc'" />
            </div>
            <div class="">
                <ItemVoorlopen :item="'voorlopen'" />
            </div>
            <div class="">
                <ItemLeerlingenKenmerken :item="'leerlingenkenmerken'" />
            </div>
            <div class="">
                <ItemInspectie :item="'inspectie'" />
            </div>
            <div class="">
                <LeesWijzer :item="'leeswijzer'" />
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>