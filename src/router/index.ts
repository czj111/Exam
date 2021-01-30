import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/Register.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Login",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "About",
    redirect:{name:"Home"}
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  }
];

const router = new VueRouter({
  routes
});

export default router;
