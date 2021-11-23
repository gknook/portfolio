import { createRouter, createWebHistory } from "vue-router";
import Introduction from "/src/pages/Introduction/index.vue";
import NoiseMeter from "/src/pages/NoiseMeter/index.vue";
import NoiseMeterPrototype from "/src/pages/NoiseMeter/prototype.vue";
import Mimi from "/src/pages/Companies/Mimi.vue";
import FlowDiagram from "/src/pages/Experiments/FlowDiagram.vue";
import CaseStudies from "/src/pages/CaseStudies/index.vue";
import SocialRhythm from "/src/pages/CaseStudies/AtiumRhythm/index.vue";
import AllAchievements from "/src/components/organisms/AllAchievements.vue";

const routes = [
  { path: "/", name: "home", component: Introduction },
  {
    path: "/case-study/",
    name: "case-study",
    component: CaseStudies
  },
  {
    path: "/case-study/social-rhythm/",
    name: "social-rhythm",
    component: SocialRhythm
  },
  {
    path: "/case-study/noise-meter/",
    name: "noise-meter",
    component: NoiseMeter
  },
  {
    path: "/case-study/noise-meter/prototype",
    name: "noise-meter-prototype",
    component: NoiseMeterPrototype
  },
  {
    path: "/companies/mimi/",
    name: "Mimi",
    component: Mimi
  }
  // {
  //   path: "/experiments/flow-diagram/",
  //   name: "flow-diagram",
  //   component: FlowDiagram
  // },
  // {
  //   path: "/experiments/all-achievements/",
  //   name: "all-achievements",
  //   component: AllAchievements
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});

export default router;
