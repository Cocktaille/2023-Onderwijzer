import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('baseStore', () => {
    /*get hostname and define the brand*/
    const hostname = ref(window.location.hostname)
    const brandShortName = ref("")
    const brandName = ref("")

    onMounted(() => {

        getBrandName()
    })
    /*get hostname and define the brand*/

    function getBrandName() { 

        if (hostname.value === "www.nieuwsblad.be" || hostname.value === "m.nieuwsblad.be" || hostname.value === "preview.nieuwsblad.be" || hostname.value === "previewm.nieuwsblad.be"  ) {
            brandShortName.value = "nb" 
            brandName.value = "nieuwsblad" 
        } else if(hostname.value === "www.gva.be" || hostname.value === "m.gva.be" || hostname.value === "preview.gva.be" || hostname.value === "previewm.gva.be"  ) {
            brandShortName.value = "gva" 
            brandName.value = "gazetvanantwerpen" 
        } else if(hostname.value === "www.hbvl.be" || hostname.value === "m.hbvl.be" || hostname.value === "preview.hbvl.be" || hostname.value === "previewm.hbvl.be"  ) {
            brandShortName.value = "hbvl" 
            brandName.value = "hetbelangvanlimburg" 
        } else  {
            brandShortName.value = "nb" 
            brandName.value = "nieuwsblad" 
        }

        //load css fonts per brand
        let cssFontFile = document.createElement('link');
        cssFontFile.setAttribute('rel', 'stylesheet');
        
        if(brandShortName.value == 'nb'){
            cssFontFile.setAttribute('href', 'https://shared.mediahuis.be/fonts/nb/v3.0.0/fonts.css');
        } 
        else if(brandShortName.value == 'gva'){
            cssFontFile.setAttribute('href', 'https://markup.gva.be/fonts/v2.0.0/fonts.css');
        } 
        else if(brandShortName.value == 'hbvl'){
            cssFontFile.setAttribute('href', 'https://markup.hbvl.be/fonts/v2.0.0/fonts.css');
        } 
        else {
            cssFontFile.setAttribute('href', 'https://shared.mediahuis.be/fonts/nb/v3.0.0/fonts.css');
        }
        
        document.head.appendChild(cssFontFile);

    }

    
    function scrollToTop() {
        window.scrollTo(0,0)
    }

    const currentScreen = ref(0)

    const scholenAll = ref("")

    onMounted(() => {
        fetch("https://opensheet.elk.sh/18NznUdX8t6cHk8v7cDF0D-jPeK38FYu-0XZR-8DnW9M/InfoScholen")
        .then(response => response.json() )
            .then(data => {
                scholenAll.value = data
            });
    });

    const chosenCity = ref("");
    const chosenCityZipCode = ref("");
    const chosenSchool = ref("");


    const showShoolsPerCity = computed(() => {

        let schoolsPerCity = scholenAll.value.filter(item => {
            return item.Postcode == chosenCityZipCode.value
        })
        return schoolsPerCity

        
    })

    function selectSchool(nummer_instelling) {
        chosenSchool.value = nummer_instelling
        currentScreen.value = 2
        scrollToTop()
    }


    const chosenSchoolDetail = computed(() => {

        for (let i = 0; i < scholenAll.value.length; i++) { 
            if(scholenAll.value[i].nummer_instelling == chosenSchool.value) {
                return scholenAll.value[i]
            }
        }
        
    })



    /*DETAIL ITEM*/
    const showDetailItem = ref('abc')
    function toggleDetailItem(item) {

        if(showDetailItem.value == item) {
            showDetailItem.value = ''
        }
        else {
            showDetailItem.value = ''
        showDetailItem.value = item
        }
        
    }

    const ficheIsVisible = ref(true)
  
    return { brandShortName, brandName, scrollToTop, currentScreen,  scholenAll, chosenCity, chosenCityZipCode, showShoolsPerCity, selectSchool, chosenSchool, chosenSchoolDetail, showDetailItem, toggleDetailItem, ficheIsVisible }
  })