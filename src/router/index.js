import { createRouter, createWebHistory } from "vue-router";
import Introduction from "/src/pages/Introduction/index.vue";
import NoiseMeter from "/src/pages/NoiseMeter/index.vue";

const routes = [{ path: "/", name: "home", component: Introduction }, { path: "/case-study/noise-meter/", name: "noise meter", component: NoiseMeter }];

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});

export default router;
