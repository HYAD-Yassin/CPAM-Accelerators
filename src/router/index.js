import { createRouter, createWebHistory } from "vue-router";

import CollectServerView from "../views/CollectServerPage.vue";

import CollectAgentView from "../views/CollectAgentPage.vue";

import FullLayout from "../layouts/full/FullLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      meta: {
        requiresAuth: true,
      },
      redirect: "/main",
      component: FullLayout,
      children: [
        {
          name: "Dashboard",
          path: "/",
          component: CollectServerView,
        },
        {
          name: "CollectAgent",
          path: "/CollectAgent",
          component: CollectAgentView,
        },
        {
          name: "Starter",
          path: "/sample-page",
          component: () => import("@/views/SamplePage.vue"),
        },
      ],
    },
  ],
});

export default router;
