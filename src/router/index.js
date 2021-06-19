import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About/index.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News/index.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact/index.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/Errors/404.vue"),
  },
  {
    path: "/401",
    name: "Unauthorized",
    component: () => import("../views/Errors/401.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: import("../views/Errors/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "exact-active",
});

export default router;
