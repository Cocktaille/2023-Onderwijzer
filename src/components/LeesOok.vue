<script setup>
import { ref, onMounted, computed } from "vue"
import { useBaseStore } from "@/stores/baseStore.js"
import { useArticleStore } from "@/stores/articleStore.js"


const baseStore = useBaseStore();
const articleStore = useArticleStore();

const props = defineProps({
  articlePositions: Array,
})


const articlesToShowCpt = computed(() => {


    return articleStore.articlesAll.filter(function(item) {
        return props.articlePositions.includes(parseInt(item.art_position));
    });
    

})


</script>

<template>
    <div class="leesook-wrapper p-3 my-3 text-md col-12">
        <div v-for="(article, index) in articlesToShowCpt" :key="index" class="mb-2">
            <strong>LEES OOK</strong>. <a :href="article.art_url" class="text-underline">
                {{article.art_title}}
            </a>
        </div>
    </div>
</template>

<style scoped>
.leesook-wrapper {background:#ebefff; }
</style>