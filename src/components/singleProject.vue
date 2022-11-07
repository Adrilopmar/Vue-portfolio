<template>
<h1 class="text-3xl">{{project}}</h1>
</template>

<script setup lang="ts">

import {onMounted, ref, watch, watchEffect} from 'vue';
import { useRoute } from 'vue-router';
import infoProjects from '../assets/infoProjects.json';

const route = useRoute()
const project = ref(route.params.projectName)
const conse = ()=>{console.log(project.value)}
onMounted( ()=> console.log(route.params.projectName))

watch(()=>route.params.projectName,(newValue,oldValue)=>{
    project.value = route.params.projectName
    console.log(route.params.projectName)
})

</script>

<style>

</style>