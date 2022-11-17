<template>
        <RouterLink class="outline-none"  :to="{name:'home'}" @click="emits('redirect')" ><h2 class="m-5 text-xl">Home</h2></RouterLink><hr>
        <RouterLink class="outline-none"  :to="{name:'projects'}" @click="emits('redirect')" ><h2 class="m-5 text-xl">Projects</h2></RouterLink>
        <hr>
        <n-space vertical >
            <n-layout class="bg-menu">
                <n-menu  
                v-model:value="activeKey"
                :collapsed="collapsed"
          :collapsed-width="70"
          :collapsed-icon-size="25"
          :options="menuOptions"
          />
        </n-layout>
    </n-space>
    <hr>
    <RouterLink :to="{name:'about'}" @click="emits('redirect')"><h2 class="m-5 text-xl">About us</h2></RouterLink>
    <hr>
</template>
<script setup lang='ts'>
import { h, ref, Component } from "vue";
import { NIcon, NMenu, NLayout, NSpace } from "naive-ui";
import type { MenuOption} from "naive-ui";
import {
  Pokeball as Pokeball,
  Clock as Clock,
  BrandSpotify as BrandSpotify,
} from "@vicons/tabler";
import { useRouter } from "vue-router";
import infoProjects from "../assets/infoProjects.json";
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
const collapsed = ref<boolean>(false);
const [procrastinant, poke_api, spoti_api] = infoProjects;
const router = useRouter();

const projectRedirect = (path: string, section: string) => {
    router.push({ path: `/projects/${path}` });
    emits('redirect')
    setTimeout(() => {
      document
        .getElementById(`project${section}`)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const emits =defineEmits(['redirect'])

const menuOptions: MenuOption[] = [
  {//procrastinan't menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("procrastinant", "Title"), // path & section
        },
        { default: () => procrastinant.name.full_name }
      ),
    key: "procrastinant",
    icon: ()=> h(Clock,
    {onclick:()=>projectRedirect("procrastinant", "Title")}
    ),
    children: [
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("procrastinant", "Explanation"), // path & section
            },
            "Explanation"
          ),
        key: "explanation_procrast",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("procrastinant", "Backlog"), // path & section
            },
            "Backlog"
          ),
        key: "backlog_procrast",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("procrastinant", "Technologies"), // path & section
            },
            "Technologies"
          ),
        key: "technologies_procrast",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("procrastinant", "Website"), // path & section
            },
            "Website"
          ),
        key: "website_procrast",
      },
    ],
  },
  {// pocket monsters menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("poke_api", "Title"), // path & section
        },
        { default: () => poke_api.name.full_name }
      ),
    key: "pokeapi",
    icon: ()=>h(Pokeball,
      { 
        onclick: () => projectRedirect("poke_api", "Title"), // path & section
       }
    ),
    children: [
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("poke_api", "Explanation"), // path & section
            },
            "Explanation"
          ),
        key: "explanation_poke",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("poke_api", "Backlog"), // path & section
            },
            "Backlog"
          ),
        key: "backlog_poke",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("poke_api", "Technologies"), // path & section
            },
            "Technologies"
          ),
        key: "technologies_poke",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("poke_api", "Website"), // path & section
            },
            "Website"
          ),
        key: "website_poke",
      },
    ],
  },
  {// Spoti API menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("spoti_api", "Title"), // path & section
        },
        { default: () => spoti_api.name.full_name }
      ),
    key: "spotiapi",
    icon: ()=> h(BrandSpotify,
        {
          onclick: () => projectRedirect("spoti_api", "Title"), // path & section
        },
      ),
    children: [
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("spoti_api", "Explanation"), // path & section
            },
            "Explanation"
          ),
        key: "explanation_spoti",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("spoti_api", "Backlog"), // path & section
            },
            "Backlog"
          ),
        key: "backlog_spoti",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("spoti_api", "Technologies"), // path & section
            },
            "Technologies"
          ),
        key: "technologies_spoti",
      },
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => projectRedirect("spoti_api", "Website"), // path & section
            },
            "Website"
          ),
        key: "website_spoti",
      },
    ],
  },

];
</script>
<style scoped>
.bg-menu{
    background-color: var(--secondary-bg);
}
</style>