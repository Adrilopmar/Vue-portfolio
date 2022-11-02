import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'

const routes =[
    {path: "/", component:home}
]

const history = createWebHistory()
const router = createRouter({history,routes})

export default router