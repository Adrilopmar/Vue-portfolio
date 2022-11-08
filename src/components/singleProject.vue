<template>
<section class="mx-9" id="projectTitle">
<h1 class="text-6xl mt-9 underline">{{fullProjectInfo?.name.full_name}}</h1>
<article>
    <div class="w-full ">
        <img class="cover-img w-full" :src="`${fullProjectInfo?.images?.cover}`" alt="">
    </div>
</article>
<article id="projectExplanation">
    <h3 class="text-4xl underline">About the project</h3>
    <div id="projectDescription" class="project-description mt-9"></div>
</article>
<article id="projectBacklog">
    <h3 class="text-4xl underline">How would I keep working ?</h3>
    <div id="projectPendings" class="project-description mt-9">
        <div v-for="pending in fullProjectInfo.backlog">
            <ul class="mt-5"><b class="text-2xl">{{pending.title}}</b>
            <li class="mt-3 text-xl">{{pending.description}}</li>
            </ul>
        </div>
    </div>
</article>
<article id="projectTechnologies">
    <h3 class="text-4xl underline">Technologies used</h3>
    <div class="flex flex-wrap justify-between mt-9">
        <div v-for="tech in fullProjectInfo?.technologies" class="mx-3">
            <ul>
                <li class="text-center mb-5 text-xl">{{tech.name}}</li>
                <img class="mb-9 logo" :src="tech.logo" alt="">
            </ul>
        </div>
    </div>
</article>
</section>
</template>

<script setup lang="ts">

import {onMounted, ref, watch} from 'vue';
import { useRoute } from 'vue-router';
import infoProjects from '../assets/infoProjects.json';

const route = useRoute()
const fullProjectInfo = ref(infoProjects.find(el=>el.name.url_name == route.params.projectName ))

const getProjectInfo = ()=>{
    let dataDescription = ''
    fullProjectInfo.value = infoProjects.find(el=>el.name.url_name == route.params.projectName )
    fullProjectInfo.value?.description.split('//').forEach(el=> dataDescription += `<p class="mt-3">${el}</p>`);
    fullProjectInfo.value?.backlog.forEach(el=> console.log(el.title))
    document.querySelector('#projectDescription').innerHTML = dataDescription
}

onMounted(()=>{
    getProjectInfo()
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
#projectTechnologies img{
    height: 100px;
}
.logo{
    filter: drop-shadow(5px 5px 2px rgb(163, 163, 163));
}


</style>