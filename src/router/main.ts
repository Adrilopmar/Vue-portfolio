import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
  { path: "/", name: "home", component: home },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../components/projects.vue"),
    children: [
      { path: "/projects/projectName", name: "singleProject", component: ()=> import("../components/singleProject.vue")},
    //   { path: "/projectName", name: "singleProject", component: ()=> import("../components/singleProject.vue")},
    ],
  },
];

const history = createWebHistory();
const router = createRouter({ history, routes });

export default router;
