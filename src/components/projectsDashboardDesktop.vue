<template>
  <aside>
    <n-space vertical >
      <n-layout has-sider >
        <n-layout-sider 
          collapse-mode="width"
          :collapsed-width="70"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
        <div class="flex flex-col justify-between container-menu" >
          <n-menu 
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="70"
          :collapsed-icon-size="25"
          :options="menuOptions"
          />
          <div class="mb-6 " >
            <div class="flex mb-12 flex-col container-logos">
              <a href="https://github.com/Adrilopmar" target="_blank"><img class="logo" src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668438222/brand%20logos/github_a8c3h0.png" alt="github-logo"></a>
              <a href="https://linkedin.com/in/adrilopmar" target="_blank"><img class="logo" src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668438222/brand%20logos/linkedi_cxmtnm.png" alt="linkedin-logo"></a>
            </div>
            <p class="text-center text-sm copy">Aloma © <br> All rights reserved </p>
          </div>
        </div>
        </n-layout-sider>
        <div class="content-single-projects w-full">
          <div class="m-9" v-if="route.path == '/projects'">
            <allProjectsDisplayVue :infoAllProjects="infoProjects"></allProjectsDisplayVue>
          </div>
          <router-view></router-view>
        </div>
      </n-layout>
    </n-space>
  </aside>
</template>

<script setup lang="ts">
import { h, ref, Component } from "vue";
import { NIcon, NMenu, NLayoutSider, NLayout, NSpace } from "naive-ui";
import type { MenuOption} from "naive-ui";
import { NEllipsis } from "naive-ui";
// TODO: delete if not used
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
import {
  Pokeball as Pokeball,
  Clock as Clock,
  BrandSpotify as BrandSpotify,
} from "@vicons/tabler";
import { useRouter, useRoute } from "vue-router";
import infoProjects from "../assets/infoProjects.json";
import allProjectsDisplayVue from "./allProjectsDisplay.vue";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
const collapsed = ref<boolean>(false);
const [procrastinant, poke_api, spoti_api] = infoProjects;
const router = useRouter();
const route = useRoute();


const projectRedirect = (path: string, section: string) => {
    router.push({ path: `/projects/${path}` });
    setTimeout(() => {
      document
        .getElementById(`project${section}`)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
.container-menu{
  height: calc(100vh - 65px);
}
.content-single-projects {
  background: var(--info-bg);
  color: var(--main-text-color);
  overflow-y: scroll;
  height: calc(100vh - 65px);
}
aside {
  background: var(--main-bg);
}
.logo{
  width: 35px;
   /* padding: 5px;  */
  
}
.container-logos{
  align-items: center;
  gap: 25px;
 
}
.container-logos a{ 
  padding: 5px 10px;
}
.container-logos a:hover{
  transition:0.2s ;
  background-color: rgb(243, 243, 245);  /* same color as side bar hover component */
}
.copy{
  font-size: 10.5px;
}

</style>
