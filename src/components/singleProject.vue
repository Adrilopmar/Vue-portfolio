<template>
<section class="mx-9">
<h1 class="text-6xl mt-9 underline">{{fullProjectInfo?.name.full_name}}</h1>
<article>
    <div class="w-full ">
        <img class="cover-img w-full" :src="`${fullProjectInfo?.images?.cover}`" alt="">
    </div>
</article>
<article id="projectExplanation">
    <h3 class="text-4xl underline">Explanation</h3>
    <div id="projectDescription" class="project-description mt-9"></div>
</article>
</section>
</template>

<script setup lang="ts">

import {onMounted, ref, watch, watchEffect} from 'vue';
import { useRoute } from 'vue-router';
import infoProjects from '../assets/infoProjects.json';

const route = useRoute()
const fullProjectInfo = ref(infoProjects.find(el=>el.name.url_name == route.params.projectName ))

const getProjectInfo = ()=>{
    let data = ''
    fullProjectInfo.value = infoProjects.find(el=>el.name.url_name == route.params.projectName )
    fullProjectInfo.value?.description.split('//').forEach(el=> data += `<p class="mt-3">${el}</p>`);
    document.querySelector('#projectDescription').innerHTML = data
}

onMounted(()=>{
    getProjectInfo()
 console.log('asd')

})

watch(()=>route.params.projectName,(newValue,oldValue)=>{
    getProjectInfo()
})

</script>

<style scoped>

article{
margin-top: 100px;
}
.project-description{
    font-size: 20px;

}



</style>