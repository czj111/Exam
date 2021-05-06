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
  console.log(to);
  console.log(from);
  if(to.matched.length===0){//是否有匹配的路径
    next({name:"notFound"});
  }
  let token=store.getters.token;
  if(to.meta.validation){//是否需要登录
    if(token) {
      next();
      // next('/User/downLoad/1')
    };
    next({name:"Home"})
  }
  else{
    if(to.name==="Home"){//已经登录直接跳转用户页面
      if(token){next({name:"User"})}
      else{
        next()
      }
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
