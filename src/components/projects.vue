<template>
  <aside>
    <n-space vertical>
      <n-layout has-sider>
        <n-layout-sider 
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <n-menu 
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <div class="content-single-projects w-full">
          <div class="mx-9 " v-if="route.path == '/projects'">
            <h3 class="text-6xl mt-9 underline">Our work</h3>
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
import type { MenuOption } from "naive-ui";
// TODO: delete if not used
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
import {
  Pokeball as Pokeball,
  Clock as Clock,
  BrandSpotify as BrandSpotify
} from '@vicons/tabler'
import { RouterLink, useRouter, useRoute } from "vue-router";
import infoProjects from "../assets/infoProjects.json";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
const collapsed = ref<boolean>(false);
const [procrastinant, poke_api, spoti_api] = infoProjects;
const router = useRouter();
const route = useRoute();

// function to redirect to project and section side menu
const projectRedirect = (path: string, section: string) => {
  router.push({ path: `/projects/${path}` });
  setTimeout(() => {
    document
      .getElementById(`project${section}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

const menuOptions: MenuOption[] = [
  { //procrastinan't menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("procrastinant", "Title"), // path & section
        },
        { default: () => procrastinant.name.full_name }
      ),
    key: "procrastinant",
    icon: renderIcon(Clock),
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
  { // pocket monsters menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("poke_api", "Title"), // path & section
        },
        { default: () => poke_api.name.full_name }
      ),
    key: "pokeapi",
    icon: renderIcon(Pokeball),
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
  { // Spoti API menu options
    label: () =>
      h(
        "button",
        {
          onclick: () => projectRedirect("spoti_api", "Title"), // path & section
        },
        { default: () => spoti_api.name.full_name }
      ),
    key: "spotiapi",
    icon: renderIcon(BrandSpotify),
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
.content-single-projects {
  background:var(--secondary-bg);
  color: var(--main-text-color);
  overflow-y: scroll;
  height: calc(100vh - 65px);
}
aside{ 
  background: var(--main-bg);
 
}
</style>