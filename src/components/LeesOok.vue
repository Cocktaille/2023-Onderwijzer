<script setup>
import { ref, onMounted } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"


const baseStore = useBaseStore();


</script>

<template>
    <div class="leesook-wrapper p-3 my-3 text-md col-12">
        <strong>LEES OOK</strong>. <a href="" class="text-underline">
            Vlaanderen telt veel meer leerkrachten dan andere landen, en toch is er lerarentekort: “Met één ingreep heb je er 25.000 bij”
        </a>
    </div>
</template>

<style scoped>
.leesook-wrapper {background:#ebefff; }
</style>