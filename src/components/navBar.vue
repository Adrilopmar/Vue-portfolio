<template>
  <ul class="flex justify-around">
    <div>
      <li class="mr-6">
        <img
          src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1667397304/vue%20portfolio/navbar/Firma_j6wfhw.gif"
          alt=""
        />
      </li>
    </div>
    <div class="flex justify-around w-4/5">

      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Projects</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">About me</a>
      </li>
    </div>
    <!-- <li class="mr-6">
      <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
    </li> -->
  </ul>
</template>
<script setup lang="ts"></script>
<style scoped>
ul {
  margin-top: 15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 20px -20px;
}
img {
  height: 50px;
}
li {
  align-self: center;
}
</style>
