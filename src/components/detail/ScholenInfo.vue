<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { usePopperStore } from "@/stores/popperStore.js"

import LeesOok from '@/components/LeesOok.vue'
import ToolTipper from '@/components/Tooltipper.vue'


const baseStore = useBaseStore();
const popperStore = usePopperStore();


const scholenFicheOpen = ref(false)

function showScholenFiche() {
    scholenFicheOpen.value = !scholenFicheOpen.value
}

</script>

<template>
    

    
        <div style="background:#000068; height:100px"></div>
        <div id="logo" class="text-center mb-3">
            <img src="https://nieuwsblad-onderwijzer.lwprod.nl/images/onderwijzer-logo.svg" alt="">
        </div>
        
        <div class="fiche-top">
            
            <div class="bg-white">
                <div class="bg-secondarys"></div>
                <div class="bg-tertiary"></div>
                <div class="school-adres brand-text-color-primary">
                    <h3 class="brand-font-primary text-lg ">{{ baseStore.chosenSchoolDetail.Naam }}</h3>
                    <p>
                        {{ baseStore.chosenSchoolDetail.Straat }} {{ baseStore.chosenSchoolDetail.Huisnummer }} {{ baseStore.chosenSchoolDetail.Busnummer }}
                        <br />
                        {{ baseStore.chosenSchoolDetail.Postcode }} {{ baseStore.chosenSchoolDetail.Gemeente }}
                    </p>
                </div>

                <Transition name="collapse">
                    <div v-if="scholenFicheOpen" class="scholenFicheDetail collapsableDiv text-md text-left ">
                        <div class="row py-3">
                            <div class="col-sm-4">
                                <div class="mb-1 text-bold">
                                    Type school 
                                    <ToolTipper :tekst="popperStore.tooltip1" />
                                </div>
                                <ul class="m-0 px-3 py-1">
                                    <li class="mb-2">{{ baseStore.chosenSchoolDetail.Type }}</li>
                                    <li class="mb-2">{{ baseStore.chosenSchoolDetail.Net }}</li>
                                </ul>
                            </div>
                            <div class="col-sm-4">
                                <div class="mb-1 text-bold">
                                    Aantal leerlingen
                                    <ToolTipper :tekst="popperStore.tooltip1" />
                                </div>
                                <ul class="m-0 px-3 py-1">
                                    <li class="mb-2">{{ baseStore.chosenSchoolDetail.Aantal_leerlingen }}</li>
                                </ul>
                            </div>
                            <div class="col-sm-4">
                                <div class="mb-1 text-bold">
                                    Aantal personeelsleden 
                                    <ToolTipper :tekst="popperStore.tooltip1" />
                                </div>
                                <ul class="m-0 px-3 py-1">
                                    <li class="mb-2">Totaal (in vte): {{ baseStore.chosenSchoolDetail.Aantal_personeel }}</li>
                                    <li class="mb-2">Aantal leerkrachten (in vte): {{ baseStore.chosenSchoolDetail.Aantal_leerkrachten }}</li>
                                    <li class="mb-2">Aantal leerlingen per voltijdse werkkracht: {{ baseStore.chosenSchoolDetail.Aantal_leerkracht_per_lln }}</li>
                                </ul>
                            </div>
                        </div>

                        <LeesOok />

                    </div>
                </Transition>

                
                

                <div class="scholenfiche brand-text-color-primary pt-3">
                    <span class="cursor-pointer brand-font-primary text-md " @click="showScholenFiche()">Bekijk scholenfiche</span> 
                    <span v-if="scholenFicheOpen == true ">&nbsp; <i class="fa-solid fa-circle-chevron-up"></i></span>
                    <span v-if="scholenFicheOpen == false ">&nbsp; <i class="fa-solid fa-circle-chevron-down"></i></span>
                </div>

            </div>
        </div>
        
        
    

</template>

<style scoped>
#logo {margin-top:-135px}
.fiche-top {padding:20px; padding-bottom:40px; height:fit-content;  text-align: center; max-width:630px; margin: 0 auto; position:relative; z-index: 100;  }
.school-adres {}

.bg-white {background:white; height: fit-content; border:1px solid #ccc; padding:20px; }
.bg-secondarys {
    background: #f7d611; z-index:-1; transform: rotate(6deg); height:100px; width:auto; position:absolute; left: 27px; padding:20px;
    right: 16px; margin-top: -10px;
}
.bg-tertiary {
    background: #e8afff; z-index:-1; transform: rotate(-4deg); height:120px; width:auto; position:absolute; left: 10px; padding:0px;
    right: 10px; margin-top: -12px;
}

.scholenfiche {border-top:1px solid #ccc; }
.scholenFicheDetail {border-top:1px solid #ccc; }


.collapsableDiv {

  

}
.collapse-enter-active {
  animation: collapse reverse 300ms ease;
}
.collapse-leave-active {
  animation: collapse 300ms ease;
}
@keyframes collapse {
  from {
    max-height: 500px;
    opacity:1;
  }
  to {
    max-height: 0px;
    opacity:0;
  }
}
</style>