<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useSearchStore } from "@/stores/searchStore.js"

import LeesOok from '@/components/LeesOok.vue'

const searchStore = useSearchStore()


</script>

<template>
    <div class="search-wrapper">

        <div class="searchBox-wrapper text-center">
            
            <div id="logo" class="text-center mb-3 mt-4">
                <img src="https://nieuwsblad-onderwijzer.lwprod.nl/images/onderwijzer-logo.svg" alt="">
            </div>

            <div class="ow-title text-md">
                <h3 class="brand-font-primary brand-text-color-primary text-normal text-lg">Het rapport van alle middelbare scholen</h3>
            </div>

            <div class="searchBox col-12 col-sm-8 m-auto">
                <input 
                    type="text" 
                    class="form-control rounded-none  border-none text-md" 
                    v-model="searchStore.userGemeenteInput"
                    @keyup="searchStore.checkZipCode()"
                    placeholder="Vul een gemeente of postcode in"
                 />
            </div>
            <div class="gemeenteResults col-12 col-sm-8 m-auto text-md">
                <div v-for="(item, index) in searchStore.gemeentes" 
                    :key="index" 
                    @click="searchStore.selectGemeente(item.name, item.zip_code)" 
                    class="autocomplete-item bg-lightgrey text-black mb-1 p-2 cursor-pointer   mt-1">

                        {{ item.name }} ({{ item.zip_code }})

                </div>
            </div>

        </div>

        <div class="disclaimer p-3 text-sm">
            Het Nieuwsblad verzamelde tal van gegevens bij de onderwijsadministratie over alle middelbare scholen in Vlaanderen en Brussel. Hoeveel leerlingen stromen door naar het hoger onderwijs en hoe doen ze het daar? Hoeveel halen er een B- of C-attest? Hoeveel zittenblijvers zijn er en hoe divers is de school? In deze tool kan je per school alle info terugvinden. Lees hierhoe we te werk gingen en waar de cijfers vandaan komen.

            <LeesOok />

        </div>

        
        
        
    </div>
</template>

<style scoped>
.search-wrapper {background:#f5f5f9;}
.searchBox-wrapper {background:#e0e0ec; padding:20px;}
.disclaimer {max-width:640px; margin:0 auto}
</style>