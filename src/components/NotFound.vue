<template>
    <div>
        <div class="error-block">
          <img v-bind:src="img"/>
          <h3>{{error}}</h3>
        </div>  
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name:"notFound",
  data(){
    return {
      error:"您要找的页面不存在",
      img:require("../assets/404.png")
    }
  }
})
</script>
<style scoped>
.error-block {
    padding-top: 80px;
    padding-bottom: 20px;
    text-align: center;
}
</style>
