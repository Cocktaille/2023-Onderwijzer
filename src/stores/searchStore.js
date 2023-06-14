import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

import { useBaseStore } from "@/stores/baseStore.js"


export const useSearchStore = defineStore('searchStore', () => {
    const baseStore = useBaseStore();
    const urlZipCodeCheck = "https://interactief2.nieuwsblad.be/WedstrijdCR/WedstrijdCR.aspx?ID=ImrsUUT17SyQumFQAEtlotww8kMSfobYJzUj3f7zkC%2Bk%2BF0SH_3jpKGWcZ0PW7gPmEzyd_e4xEVKd4&notags=1&NAME="

    const userGemeenteInput = ref("")
    const gemeentes = ref([])

    const userCity = ref("");
    const userZipCode = ref("")

    function checkZipCode() {
        if(userGemeenteInput.value.length > 1) {
            fetch(urlZipCodeCheck + userGemeenteInput.value)
            .then(response => response.json() )
            .then(data => {
                gemeentes.value = data.cities.city
                userCity.value = data.cities.city[0].name;
                userZipCode.value = data.cities.city[0].zip_code;
            });
        }
        if(userGemeenteInput.value.length <= 1) {
            gemeentes.value = []
        }
    }

    function selectGemeente(gemeentenaam, hoofdpostcode) {
        baseStore.chosenCity = gemeentenaam;
        baseStore.chosenCityZipCode = hoofdpostcode;

        gemeentes.value = []

        baseStore.currentScreen++
        baseStore.scrollToTop()
    }
  
    return { userGemeenteInput, gemeentes, checkZipCode, userCity, userZipCode, selectGemeente }
  })