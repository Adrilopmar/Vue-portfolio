<template>
  <div class="bg-dashboards">
    <ProjectsDashboardMobile v-if="resizing"></ProjectsDashboardMobile>
    <ProjectsDashboardDesktop v-else></ProjectsDashboardDesktop>
  </div>

</template>
<script setup lang='ts'>
import ProjectsDashboardDesktop from '../components/projectsDashboardDesktop.vue';
import ProjectsDashboardMobile from '../components/projectsDashboardMobile.vue'
import {onMounted, ref} from 'vue'

const resizing = ref<boolean>(true)

const handleResize = ()=>{
  resizing.value=  window.innerWidth < 580

}
onMounted(()=>{
  handleResize()
})
window.addEventListener('resize',handleResize)
</script>
<style scoped>
.bg-dashboards{
  background: var(--info-bg);
  color: var(--main-text-color);
}
</style>