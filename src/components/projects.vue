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
        <router-view></router-view>
      </n-layout>
    </n-space>
  </aside>
</template>

<script setup lang="ts">
import { h, ref, Component } from "vue";
import { NIcon, NMenu, NLayoutSider, NLayout, NSpace } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
import { RouterLink, useRouter } from "vue-router";
import infoProjects from "../assets/infoProjects.json";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const activeKey = ref<string | null>(null);
const collapsed = ref<boolean>(false);
const [procrastinant, poke_api] = infoProjects;
const router = useRouter();

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: `singleProject`,
            params: { projectName: procrastinant.name.url_name },
          },
        },
        { default: () => procrastinant.name.full_name }
      ),
    key: "procrastinant",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => {
                router.push({ path: "/projects/procrastinant" });
                setTimeout(() => {
                  document
                    .getElementById("projectExplanation")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              },
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
              onclick: () => {
                router.push({ path: "/projects/procrastinant" });
                setTimeout(() => {
                  document
                    .getElementById("projectExplanation")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 200);
              },
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
        label: "Technologies",
        key: "technologies_procrast",
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: `singleProject`,
            params: { projectName: poke_api.name.url_name },
          },
        },
        { default: () => poke_api.name.full_name }
      ),
    key: "pokeapi",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            "button",
            {
              onclick: () => {
                router.push({ path: "/projects/poke_api" });
                setTimeout(() => {
                  document
                    .getElementById("projectExplanation")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
            },
            "Explanation"
          ),
        key: "explanation_poke",
      },
      {
        label: "Backlog",
        key: "backlog_poke",
      },
      {
        label: "Big mistakes",
        key: "big_mistakes_poke",
      },
      {
        label: "Technologies",
        key: "technologies_poke",
      },
    ],
  },
  // {
  //   label: ()=> h(RouterLink,{to:{name:'singleProject'}},{default:()=>'procrastinant'}),
  //   key: 'pinball-1973',
  //   icon: renderIcon(BookIcon),
  //   disabled: false,
  //   children: [
  //     {
  //       label: 'Rat',
  //       key: 'rat'
  //     }
  //   ]
  // },
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
aside {
  height: calc(100vh - 65px);
}
</style>
