<template>
<div class="w-100 main-welcome flex flex-col">

    <h1 class="text-center text-6xl text-white mb-12">Adrià López Martínez</h1>
    <p class="text-white text-center">Front end developer</p>
    <p class="text-white text-center">
      Motivated to build the internet of today to improve the internet of
      tomorrow we all built yesterday.
    </p>
 
    <div class="container-buttons flex justify-center">

        <n-button tertiary class="btn mr-5">About me</n-button>
          <router-link :to="{name:'projects'}">
        <n-button tertiary class="btn"> 
          Projects
        </n-button>
            </router-link> 
    </div>
</div>

</template>
<script setup lang="ts">
import { NButton } from 'naive-ui';

</script>
<style scoped>
.main-welcome {
  background-color: rgb(0, 73, 107);
  height: calc(100vh - 65px);
  /* flex-direction: column; */
  justify-content: center;
  
}
.btn{
   color: white;
}
.btn:hover{
    background-color: aqua;
}
</style>
