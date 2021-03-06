import { createRouter, createWebHistory } from "vue-router";
import Introduction from "/src/pages/Introduction/index.vue";
import NoiseMeter from "/src/pages/NoiseMeter/index.vue";
import NoiseMeterPrototype from "/src/pages/NoiseMeter/prototype.vue";
import Mimi from "/src/pages/Companies/Mimi.vue";
import CaseStudies from "/src/pages/CaseStudies/index.vue";
import SocialRhythm from "/src/pages/CaseStudies/AtiumRhythm/index.vue";
import Settings from "/src/pages/Settings/index.vue";
import Brain from "/src/pages/Brain/index.vue";
import ProductPrinciples from "/src/pages/Brain/product-principles.vue";
import Process from "/src/pages/Brain/process.vue";

// import TeamRadial from "/src/components/organisms/TeamRadial.vue";
// import FlowDiagram from "/src/pages/Experiments/FlowDiagram.vue";
// import AllAchievements from "/src/components/organisms/AllAchievements.vue";

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
  },
  {
    path: "/brain/",
    name: "brain",
    component: Brain
  },
  {
    path: "/brain/product-principles",
    name: "product-principles",
    component: ProductPrinciples
  },
  {
    path: "/brain/process",
    name: "process",
    component: Process
  },
  {
    path: "/settings/",
    name: "settings",
    component: Settings
  }
  // {
  //   path: "/experiments/team/",
  //   name: "team",
  //   component: TeamRadial
  // }
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
