import { createRouter, createWebHistory } from "vue-router";
import Introduction from "/src/pages/Introduction/index.vue";

const routes = [{ path: "/", name: "home", component: Introduction }];

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});

export default router;
