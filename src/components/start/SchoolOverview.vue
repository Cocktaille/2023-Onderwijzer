<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useSearchStore } from "@/stores/searchStore.js"

const searchStore = useSearchStore()
const baseStore = useBaseStore()


</script>

<template>
    <div class="result-wrapper">

        

        <div id="logoHead" class="text-center mb-3 ">
            
            <div class="mt-3 mb-3">
                {{ baseStore.showShoolsPerCity.length }} resultaten gevonden in
                <div class="brands-font-primary mt-2 ">{{ baseStore.chosenCity }}</div>
            </div>
        </div>

        <div v-if="baseStore.showShoolsPerCity.length > 0">
            <div class="results col-12 col-md-8 m-auto">
                <div class="result-item cursor-pointer" v-for="(item, index) in baseStore.showShoolsPerCity" :key="index" @click="baseStore.selectSchool(item.nummer_instelling)">
                    <div class="row">
                        <div class="col-12 col-sm-8">
                            <h3 class="brands-font-primary text-lg brands-text-color-primary">{{ item.Naam}} </h3>
                            <div>
                                {{ item.Straat }} {{ item.Huisnummer }}<br />
                                {{ item.Postcode }} {{ item.Gemeente }}
                            </div>
                        </div>
                        <div class="col-12 col-sm-4" style="display: flex; align-items: center;">
                            <button class="mt-3 btn rounded-none brands-button-color-primary border-none text-md">Bekijk rapport <i class="fa-solid fa-circle-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center text-md">
            Er werden geen scholen gevonden in deze gemeente.
            <div @click="baseStore.currentScreen = 0  ; searchStore.userGemeenteInput = '' " class="cursor-pointer p-1 text-md text-underline mt-3">
                <i class="fa-solid fa-circle-chevron-left"></i>  Wijzig zoekopdracht
            </div>
        </div>
        
        
        
    </div>
</template>

<style scoped>
.result-wrapper {background:#e0e0ec; }
#logoHead {background:#000068; color:white; padding:20px 20px 10px 20px; }

.result-item {background:white; padding:40px 20px; margin-bottom:5px; border:1px solid #d6d6d6;  }
</style>