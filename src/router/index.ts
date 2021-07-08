import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import firebase from "@/firebase";
import Home from "../views/Home.vue";
import LearnMore from "../views/LearnMore.vue";
import WhitePaper from "../views/WhitePaper.vue";
import Faq from "../views/Faq.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeaderBg: true,
    },
  },
  {
    path: "/learn-more",
    name: "LearnMore",
    component: LearnMore,
  },
  {
    path: "/white-paper",
    name: "WhitePaper",
    component: WhitePaper,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("../views/Admin/Login.vue"),
    meta: {
      hideMenu: true,
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: () => import("../views/Admin/Dashboard.vue"),
    meta: {
      hideMenu: true,
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const redirectIfLoggedIn = to.matched.some(
    (record) => record.meta.redirectIfLoggedIn
  );
  if (requiresAuth && !(await getCurrentUser())) {
    next("/admin/login");
  } else if (redirectIfLoggedIn && (await getCurrentUser())) {
    next("/admin/dashboard");
  } else {
    next();
  }
});

export default router;
