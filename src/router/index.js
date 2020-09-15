import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobremi",
    name: "Sobremi",
    component: () =>
      import(/* webpackChunkName: "sobre mi" */ "../views/Sobremi.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  {
    path: "/post/:entrada",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/Post.vue"),
    children: [
      {
        path: "comentarios",
        name: "Comentarios",
        component: () =>
          import(
            /* webpackChunkName: "comentarios" */ "../components/Comentarios.vue"
          ),
      },
    ],
  },//final de post
  {
    path: "*",
    name: "Not_found",
    component: () =>
      import(/* webpackChunkName: "not found" */ "../components/NotFound.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
