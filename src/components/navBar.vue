<template>
  <ul class="flex justify-around ">
    <div>
      <li class="mr-6">
        <img class=""
          src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png"
          alt=""
        />
      </li>
    </div>
    <div class="flex justify-around w-4/5">

      <li class="mr-6">
        <RouterLink :to="{name:'home'}" class="text-black hover:text-white">Home</RouterLink>
      </li>
      <li class="mr-6">
        <RouterLink :to="{name:'projects'}" class="text-black hover:text-white">Projects</RouterLink>
      </li>
      <li class="mr-6">
        <RouterLink :to="{name:'about'}" class="text-black hover:text-white">About us</RouterLink>
      </li>
    </div>
    <!-- <li class="mr-6">
      <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
    </li> -->
  </ul>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
</style>
