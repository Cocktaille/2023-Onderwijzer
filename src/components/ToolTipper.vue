<script setup>
import { ref, onMounted } from "vue"

const props = defineProps({
  tekst: String,
})
</script>

<template>
    <Popper :hover="true" >
                    
        <div ><i class="fa-regular fa-circle-question" ></i></div>
        <template #content>
            <div class="popper-inner" v-html="props.tekst">
                

            </div>
        </template>
    </Popper>
</template>

<style scoped>
#messagentWrap i {color:#f35821  !important}
</style>