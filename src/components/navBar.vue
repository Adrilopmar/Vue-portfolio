<template>
  <ul class="flex justify-around w-full">
    <div>
      <li class="mr-6">
        <RouterLink :to="{name:'home'}">
         <img class=""
          src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png"
          alt=""
        /></RouterLink>
      </li>
    </div>
    <div class="flex w-3/5 justify-around">
      <li class="mr-6">
        <RouterLink :to="{name:'home'}" class="text-black hover:text-white desktop-link">Home</RouterLink>
      </li>
      <li class="mr-6">
        <RouterLink :to="{name:'projects'}" class="text-black hover:text-white desktop-link">Projects</RouterLink>
      </li>
      <li class="mr-6">
        <RouterLink :to="{name:'about'}" class="text-black hover:text-white desktop-link">About us</RouterLink>
      </li>
      <li>
        <n-icon class="my-auto mr-6" @click="activate('left')"><Menu2 class="text-2xl burger-menu hidden cursor-pointer hover:text-white"/></n-icon>
      </li>
    </div>
    
  </ul>
  <n-drawer v-model:show="active" :width="250" :placement="placement" class="prova">
    <n-drawer-content class="prova">
     <menuMobile @redirect="closeMenu"></menuMobile>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {NDrawer,NDrawerContent, NIcon } from "naive-ui";
import { ref } from 'vue'
import type { DrawerPlacement } from 'naive-ui'
import {Menu2 as Menu2} from '@vicons/tabler'
import menuMobile from './menuMobile.vue'




const active = ref(false)
    const placement = ref<DrawerPlacement>('right')
    const activate = (place: DrawerPlacement) => {
      active.value = true
      placement.value = place
  }
const closeMenu =()=> active.value=false

const handleResize = ()=>{
  if(window.innerWidth > 580) active.value= false
}
window.addEventListener('resize', handleResize)
</script>
<style scoped>
ul {
  padding: 7.5px 0;

}
img {
  height: 50px;
  margin-left: 10px;
}
li {
  align-self: center;
}
.prova{
  background-color: var(--secondary-bg);
}
@media (max-width: 580px){
  .desktop-link{
    display: none;
  }
  .burger-menu{
    display: block;
  }
  
}
</style>
