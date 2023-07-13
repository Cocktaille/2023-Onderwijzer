<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"


const baseStore = useBaseStore()

const showGradient = ref(true)


</script>

<template>
    <div class="leeswijzer-wrapper">
        <div class="item " :class="{'item-open': baseStore.showDetailItem == item, 'overflow-hidden': showGradient }" >
        
            <div class="absolute" :class="{'gradient' : showGradient}"></div>
            
            <h3 class="d-inline brand-font-primary text-nm brand-text-color-primary ">
                Leeswijzer
            </h3> 
            <div class="d-block"></div>

            <div class="text-md mt-3">
                <p><strong>De data die je in deze Onderwijzer terugvindt, komen van de onderwijsadministratie.</strong> De meeste data zijn aangeleverd door het Agentschap voor Onderwijsdiensten (AGODI). Alleen de gegevens over de doorstroming naar het hoger onderwijs en de slaagpercentages aan de hogeschool of universiteit komen van het Agentschap voor Hoger Onderwijs, Volwassenenonderwijs, Kwalificaties en Studietoelagen (AHOVOKS). Alle data slaan op het schooljaar 2021-2022, behalve die van AHOVOKS. Daar gaat het over studenten die zich in het hoger onderwijs inschreven in september 2017 en afstudeerden in 2020 of 2021, naargelang de duur van de bacheloropleiding.</p>
        
                <p><strong>De verzamelde data zeggen niet alles over de kwaliteit van het onderwijs in de betreffende school.</strong> In welke mate scholen erin slagen om leerwinst te boeken bij hun leerlingen – en hen dus vooruitgang te laten maken – zit niet in deze cijfers vervat. Daar bestaan nu eenmaal geen gegevens over. Het is evident dat een school met meer kansarme kinderen een andere startpositie heeft dan een school waar enkel kinderen van hoogopgeleide ouders terechtkomen.</p>
        
                <p><strong>We spreken in onze Onderwijzer over de onderwijsvormen ASO, TSO, BSO en KSO en niet over de zogenaamde finaliteiten</strong>, die aanduiden waar studierichtingen op voorbereiden: de arbeidsmarkt, het hoger onderwijs of een combinatie van de twee. Die finaliteiten zijn ingevoerd samen met de modernisering van het onderwijs. Die modernisering gaat voor de derde graad pas in september 2023 in, dus daar bestaan de finaliteiten nu nog niet. Om scholen te kunnen vergelijken met scholen van eenzelfde type, gebruiken we daarom de klassieke onderwijsvormen. Die blijven overigens officieel bestaan naast de finaliteiten.</p>
        
               <p><strong>De onderwijsadministratie levert de data volgens instellingsnummer. Dat is een administratief nummer waaraan leerlingen worden gekoppeld</strong>. Die instellingsnummers komen niet altijd overeen met de werkelijke organisatie van een school. De studierichtingen die op één instellingsnummer staan geregistreerd, kunnen in de realiteit over verschillende campussen verspreid zitten. Soms zijn er ook meerdere instellingsnummers voor één school. Dat administratieve kluwen is vaak het gevolg van fusies tussen scholen. Omwille van allerlei financiële en praktische redenen behouden scholen de verschillende instellingsnummers. We hebben in onze Onderwijzer zo duidelijk mogelijk weergegeven welke richtingen onder welk instellingsnummer vallen.</p>
        
                <p>De scholen zijn in deze Onderwijzer opgenomen volgens het hoofdadres waarop ze geregistreerd staan. Veel scholen hebben meerdere vestigingsplaatsen die aan dat hoofdadres zijn gekoppeld, soms in andere gemeenten. Die vestigingsplaatsen zijn niet opgenomen in onze Onderwijzer.</p>
        
                <p>Heb je een opmerking over onze Onderwijzer, neem dan contact op met onze redactie via <a href="mailto:onderwijzer@nieuwsblad.be">onderwijzer@nieuwsblad.be</a>.</p>
            </div>
            
        </div>

        <div class="text-center">
            <button 
            class="mt-3 btn btn-inverted rounded-none brand-button-color-primary border-none text-md" 
            @click="showGradient = !showGradient">
                Lees meer <span v-if="!showGradient" class=" ml-2">
                    <i class="fa-solid fa-chevron-up"></i>
                </span>
                <span v-else class=" ml-2">
                    <i class="fa-solid fa-chevron-down"></i>
                </span>
            </button>
        </div>
        
        
    </div>
</template>

<style scoped>
.leeswijzer-wrapper {margin-bottom:40px}
.item {background:#ffffff; padding:15px 20px;   position:relative; margin-bottom:0px }
.item.item-open {background:#f7f9ff}
.absolute {position:absolute}
.gradient {background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 91%);     z-index: 20;
    top: 0;
    bottom: 0;
    width: 100%;}
    .overflow-hidden {overflow: hidden; max-height: 128px;}
</style>