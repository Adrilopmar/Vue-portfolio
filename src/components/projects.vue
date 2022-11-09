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
        <div class="content-single-projects">
          <div v-if="route.path == '/projects'">dfghfdghdgfh</div>
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
  Clock as Clock
} from '@vicons/tabler'
import { RouterLink, useRouter, useRoute } from "vue-router";
import infoProjects from "../assets/infoProjects.json";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
const collapsed = ref<boolean>(false);
const [procrastinant, poke_api] = infoProjects;
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
  {
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
        label: "Big mistakes",
        key: "big_mistakes_procrast",
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
  {
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
        label: "Big mistakes",
        key: "big_mistakes_poke",
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
  {
    label: "A Wild Sheep Chase",
    key: "a-wild-sheep-chase",
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    label: "Dance Dance Dance",
    key: "Dance Dance Dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "People",
        key: "people",
        children: [
          {
            label: "Narrator",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "Sheep Man",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: "Beverage",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "Whisky",
            key: "whisky",
          },
        ],
      },
      {
        label: "Food",
        key: "food",
        children: [
          {
            label: "Sandwich",
            key: "sandwich",
          },
        ],
      },
      {
        label: "The past increases. The future recedes.",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];
</script>

<style scoped>
.content-single-projects {
  overflow-y: scroll;
  height: calc(100vh - 65px);
}
</style>