import { createRouter, createWebHistory } from "vue-router";
import Introduction from "/src/pages/Introduction/index.vue";
import NoiseMeter from "/src/pages/NoiseMeter/index.vue";
import Mimi from "/src/pages/Companies/Mimi.vue";

const routes = [
  { path: "/", name: "home", component: Introduction },
  {
    path: "/case-study/noise-meter/",
    name: "noise meter",
    component: NoiseMeter
  },
  {
    path: "/companies/mimi/",
    name: "Mimi",
    component: Mimi
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});

export default router;
