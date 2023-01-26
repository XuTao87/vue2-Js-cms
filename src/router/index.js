import Vue from "vue";
import VueRouter from "vue-router";
import loacl from "@/utile/loacl";
import { firstMenu } from "@/utile/map-menus";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../views/login/login.vue"),
  },
  {
    name: "main",
    path: "/main",
    redirect: "",
    component: () => import("../views/main/main.vue"),
  },
  {
    path: "*",
    component: () => import("../views/NoFont/index404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function handleRouter(to, menu) {
  let flag = false;
  menu.forEach((r) => {
    if (r.url.includes(to.path.slice(0, -1))) {
      flag = true;
    }
  });
  return flag;
}

// router.beforeEach((to, from, next) => {
//   const token = loacl.getCache('token')
//   const menu = loacl.getCache("menus")
//   const _to = {
//     path: firstMenu.url
//   }
//   const flag = handleRouter(to, menu)
//   if (token) {
//     if (to.path == "/login" || flag) {
//       next({
//         ..._to,
//         replace: true
//       })
//     }
//     next()
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  const _to = {
    path: firstMenu?.url,
  };
  const token = loacl.getCache("token");
  if (token) {
    if (to.path === "/main") {
      next({
        ..._to,
        replace: true,
      });
    }
    next();
  }
  next();
});
export default router;
