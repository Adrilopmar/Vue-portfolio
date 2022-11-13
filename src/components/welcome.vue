<template>
  <div class="w-100 main-welcome flex flex-col">
    <h1 class="text-center text-4xl md:text-6xl text-white mb-5 md:mb-12">Adrià López Martínez</h1>
    <p class="text-white text-center  text-2xl md:text-5xl md:mt-9">You surf the net, <br> we keep you on the crest</p>
    <img class="main-logo" src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png" alt="">
    <div class="container-buttons flex justify-around md:justify-center">
      <router-link :to="{name:'about'}">
        <n-button tertiary class="btn md:mr-12 text-xl ">About us</n-button>
      </router-link>
      <router-link :to="{ name: 'projects' }">
        <n-button tertiary class="btn text-xl"> Our projects </n-button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
</script>
<style scoped>
.main-welcome {
  background-color: rgb(0, 73, 107);
  height: calc(100vh - 65px);
  justify-content: center;
}
h1,p{
  color: var(--secondary-text-color);
}
.main-logo{
  height: 250px;
  margin: 50px  auto;
}
.btn {
  color: white;
}
.btn:hover {
  background-color: var(--primary-btn-hover);
  
}
</style>
