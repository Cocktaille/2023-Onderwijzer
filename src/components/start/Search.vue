<script setup>
import { ref, onMounted, computed } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useSearchStore } from "@/stores/searchStore.js"

import LeesOok from '@/components/LeesOok.vue'

const searchStore = useSearchStore()
const baseStore = useBaseStore()

import { useFuse } from '@vueuse/integrations/useFuse'

const searchForSchool = ref(true)
const searchForCity = ref(false)

const data = baseStore.scholenAll
// const data = [
//   'John Smith',
//   'John Doe',
//   'Jane Doe',
//   'Phillip Green',
//   'Peter Brown',
// ]
const input = ref(searchStore.userGemeenteInput)


const options = computed (() => ({
  fuseOptions: {
    keys: ['Gemeente', 'Naam', 'Postcode'],
    threshold: 0.2,
    isCaseSensitive: false
  },
  resultLimit: 100
}))

const { results } = useFuse(input, data, options)





</script>

<template>



    <div class="search-wrapper">

        <div class="searchBox-wrapper text-center p-5">
            
            <div id="logo" class="text-center mb-3 mt-2">
                <img src="https://nieuwsblad-onderwijzer.lwprod.nl/images/onderwijzer-logo.svg" alt="">
            </div>

            <div class="ow-title text-md mb-4 ">
                <h3 class="brand-font-primary brand-text-color-primary text-bold text-lg">Het rapport van alle middelbare scholen</h3>
            </div>

            <div class="text-center mt-4 mb-4">
                <span @click="searchForCity = false; searchForSchool = true" class="mr-4  cursor-pointer" :class="{searchLinkActive: searchForSchool}" >Zoek op school</span>
                <span @click="searchForCity = true; searchForSchool = false " class="mr-4  cursor-pointer" :class="{searchLinkActive: searchForCity}" >Zoek op gemeentenaam</span>
                
            </div>
            

            <div v-if="searchForCity">
                <div class="searchBox col-12 col-sm-8 m-auto ">
                    <input 
                        type="text" 
                        class="form-control form-control-lg rounded-none  border-none text-md" 
                        v-model="searchStore.userGemeenteInput"
                        @keyup="searchStore.checkZipCode()"
                        @keyup.enter="searchStore.selectGemeente(searchStore.gemeentes[0].name, searchStore.gemeentes[0].zip_code)"
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
            <div v-if="searchForSchool">
            
                <div class="searchBox col-12 col-sm-8 m-auto ">
                    <input 
                        type="text" 
                        class="form-control form-control-lg rounded-none  border-none text-md" 
                        v-model="input"
                        @keyup="searchStore.checkZipCode()"
                        @keyup.enter="searchStore.selectGemeente(searchStore.results[0].name, searchStore.gemeentes[0].zip_code)"
                        placeholder="Vul de naam van een school in, of zoek op gemeente of postcode"
                     />
                </div>
                <div class="gemeenteResults col-12 col-sm-8 m-auto text-md">
                    <div class="mt-3 mb-2 text-bold" v-if="input.length > 2 ">
                        <div v-if="results.length == 0 ">Sorry, er zijn geen resultaten voor {{input}} gevonden.</div>
                        <div v-else>{{results.length}} scholen gevonden</div>
                    </div>
                    <div v-for="(school, index) in results" 
                        :key="index" 
                        @click="baseStore.selectSchool(school.item.nummer_instelling)" 
                        class="autocomplete-item bg-lightgrey text-black mb-1 p-4 cursor-pointer   mt-1">
    
                        <div class="row text-left">
                        <div class="col-12 col-sm-8">
                            <h3 class="brand-font-primary text-lg brand-text-color-primary">{{ school.item.Naam}} </h3>
                            <div>
                                {{ school.item.Straat }} {{ school.item.Huisnummer }}<br />
                                {{ school.item.Postcode }} {{ school.item.Gemeente }}
                            </div>
                        </div>
                        <div class="col-12 col-sm-4" style="display: flex; align-items: center;">
                            <button class="mt-3 btn rounded-none brand-button-color-primary border-none text-md">Bekijk rapport <i class="fa-solid fa-circle-chevron-right"></i></button>
                        </div>
                    </div>
    
                    </div>
                </div>
            </div>

        </div>

        <div class="disclaimer p-3 text-sm">
            Het Nieuwsblad verzamelde tal van gegevens bij de onderwijsadministratie over alle middelbare scholen in Vlaanderen en Brussel. Hoeveel leerlingen stromen door naar het hoger onderwijs en hoe doen ze het daar? Hoeveel halen er een B- of C-attest? Hoeveel zittenblijvers zijn er en hoe divers is de school? In deze tool kan je per school alle info terugvinden. <a href="https://www.nieuwsblad.be/cnt/dmf20230314_94374317?utm_source=nieuwsblad&utm_medium=tool&utm_campaign=onderwijsdossier" target="_blank">Lees hier</a> hoe we te werk gingen en waar de cijfers vandaan komen.

            <LeesOok />

        </div>

        
        
        
    </div>
</template>

<style scoped>
.search-wrapper {background:#f5f5f9;}
.searchBox-wrapper {background:#e0e0ec; padding:20px;}
.disclaimer {max-width:640px; margin:0 auto}
.nb .searchLinkActive {color:#000068 !important; padding-bottom: 5px; border-bottom: 1px solid #000068; font-weight: bold;}
.gva .searchLinkActive {color:#e20714 !important; padding-bottom: 5px; border-bottom: 1px solid #e20714; font-weight: bold;}
.hbvl .searchLinkActive {color:#000000 !important; padding-bottom: 5px; border-bottom: 1px solid #000000; font-weight: bold;}
</style>