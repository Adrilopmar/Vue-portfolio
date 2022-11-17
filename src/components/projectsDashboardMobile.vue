<template>
    <div class="p-7">
        <allProjectsDisplay v-if="route.path == '/projects'"
        :infoAllProjects="infoProjects"></allProjectsDisplay>
        <router-view></router-view>
    </div>
</template>
<script setup lang='ts'>
import AllProjectsDisplay from './allProjectsDisplay.vue';
import infoProjects from "../assets/infoProjects.json";
import {ref} from 'vue'
import { useRouter, useRoute } from "vue-router";

const route = useRoute()

// const [procrastinant, poke_api, spoti_api] = infoProjects;

</script>
<style scoped>
</style>