import { createRouter, createWebHistory } from "vue-router";
import Page from "./Page.vue";

// --

export const routes = [
  {
    path: "/",
    redirect: "/page",
  },
  {
    path: "/page",
    name: "page",
    component: Page,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
