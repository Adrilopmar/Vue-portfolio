import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { 
    path: "/", 
    name: "home", 
    component: () => import("../views/home.vue") 
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../components/projects.vue"),
    children: [
      {
        path: ":projectName",
        name: "singleProject",
        component: () => import("../components/singleProject.vue"),
      },
      // {
      //   path: "/projectName",
      //   name: "singleProject",
      //   component: () => import("../components/singleProject.vue"),
      // },
    ],
    
  },
  { 
    path: "/about", 
    name: "about", 
    component: () => import("../views/about.vue") 
  },
];

const history = createWebHistory();
const router = createRouter({ history,
 routes,
 scrollBehavior():void {
  document.getElementById('app')?.scrollIntoView();
}
});

export default router;
