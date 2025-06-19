import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Admin from "../views/AdminView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
