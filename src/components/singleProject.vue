<template>
  <section class="p-7" id="projectTitle">
    <h1 class="text-5xl md:text-6xl underline">
      {{ fullProjectInfo?.name.full_name }}
    </h1>
    <article>
      <div class="w-full">
        <img
          class="cover-img w-full"
          :src="`${fullProjectInfo?.images?.cover}`"
          alt=""
        />
      </div>
    </article>
    <article id="projectExplanation">
      <h3 class="text-4xl underline">About the project</h3>
      <div id="projectDescription" class="project-description mt-9"></div>
    </article>
    <article id="projectBacklog">
      <h3 class="text-4xl underline">How would we keep working ?</h3>
      <div id="projectPendings" class="project-description mt-9">
        <div v-for="pending in fullProjectInfo.backlog">
          <ul class="mt-5">
            <b class="text-2xl">{{ pending.title }}</b>
            <li class="mt-3 text-xl">{{ pending.description }}</li>
          </ul>
        </div>
      </div>
    </article>
    <article id="projectTechnologies">
      <h3 class="text-4xl underline">Technologies used</h3>
      <div class="flex flex-wrap justify-evenly mt-9">
        <div v-for="tech in fullProjectInfo?.technologies" class="mx-3">
          <ul>
            <li class="text-center mb-5 text-xl">{{ tech.name }}</li>
            <img class="mb-9 logo" :src="tech.logo" alt="" />
          </ul>
        </div>
      </div>
    </article>
    <article id="projectWebsite">
      <h3 class="text-4xl underline">Check this project out</h3>
      <p class="text-xl mt-5">
        If you are reading this it might be because you are curious for this
        project.
      </p>
      <p class="text-xl mt-5">
        Do not hesitate to contact us if you would like to know more about the
        app or you have found a bug.
      </p>
      <p class="text-xl mt-5">Thank you! Hope you like it</p>
      <a :href="fullProjectInfo?.website" target='_blank' class="flex justify-center ">
        <n-button tertiary class="link-btn my-9 w-full lg:w-1/2 p-5 text-lg ">
          Check {{ fullProjectInfo?.name.full_name }} out!
        </n-button>
      </a>
    </article>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import infoProjects from "../assets/infoProjects.json";
import { NButton } from "naive-ui";

const route = useRoute();
const fullProjectInfo = ref(
  infoProjects.find((el) => el.name.url_name == route.params.projectName)
);

const getProjectInfo = () => {
  let dataDescription = "";
  fullProjectInfo.value = infoProjects.find(
    (el) => el.name.url_name == route.params.projectName
  );
  fullProjectInfo.value?.description.full_description
    .split("//")
    .forEach((el) => (dataDescription += `<p class="mt-3">${el}</p>`));
  document.querySelector("#projectDescription").innerHTML = dataDescription;
};

onMounted(() => {
  getProjectInfo();
});

watch(
  () => route.params.projectName,
  (newValue, oldValue) => {
    getProjectInfo();
  }
);
</script>

<style scoped>

article {
  margin-top: 100px;
}
.project-description {
    font-size: 20px;
}
#projectTechnologies img {
    height: 100px;
}
.logo {
    filter: drop-shadow(5px 5px 2px rgb(54, 54, 54));
}
.link-btn {
  background: var(--primary-btn);
  color: var(--button-green-text);
}
.link-btn:hover{
    background: var(--primary-btn-hover);
    color: var(--button-green-text-hover);
    }
    .link-btn:focus{
        background: var(--primary-btn);
  color: var(--button-green-text);
    }
</style>
