import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/Register.vue";
import User from "../views/User.vue";
import NotFound from "../components/NotFound.vue";

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
  },
  {
    path:"/User",
    name:"User",
    component:User
  },
  {
    path:"/404",
    name:"notFound",
    component:NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
