import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', () => {

    const articlesAll = ref({})

    onMounted(() => {
        fetch("https://opensheet.elk.sh/18NznUdX8t6cHk8v7cDF0D-jPeK38FYu-0XZR-8DnW9M/Articles")
        .then(response => response.json() )
            .then(data => {
                articlesAll.value = data
            });
    });

    
    
  
    return { 

        articlesAll,
        

     }
  })