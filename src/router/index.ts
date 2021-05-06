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
  },{
    path: "/",
    name: "toUser",
    redirect:"/User/downLoad",
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path:"/User",
    name:"User",
    redirect:{name:"DownLoad"},
    component:User,
    children:[{
      path:"downLoad",
      name:"DownLoad",
      component:DownLoad,
      meta:{
        validation:true
      }
    },{
      path:"exam",
      name:"Exam",
      component:Exam,
      meta:{
        validation:true
      }
    },
    {
      path:"showScore",
      name:"ShowScore",
      component:showScore,
      meta:{
        validation:true
      }
    }
  ]
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
