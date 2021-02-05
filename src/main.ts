import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
//引入element-ui
import Element from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element);

Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
router.beforeEach((to, from, next) =>{
  console.log(to)
    if(to.matched.length===0){
      next('/404');
    }else{
      if(store.getters.token){
        next();
      }
      else if(to.name==="Home"){
        next()
      }else{
        next('/Login');
      }
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
