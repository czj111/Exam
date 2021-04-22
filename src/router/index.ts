import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/Register.vue";
import User from "../views/User.vue";
import NotFound from "../components/NotFound.vue";
import DownLoad from "../components/DownLoad.vue";
import Exam from "../components/Exam.vue";
import showScore from "../components/showScore.vue";

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
    path:"/User/:id",
    name:"User",
    component:User,
    meta:{
      validation:true
    }
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
