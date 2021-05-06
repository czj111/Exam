<template>
  <div>
    <Head />
    <FunctionPage/>
  </div>
</template>
<script>
import Vue from "vue";
import Head from "../components/Head";
import Foot from "../components/Footer"
import FunctionPage from "../components/FunctionPage"
export default Vue.extend({
  name:"User",
  components:{Head,Foot,FunctionPage},
})
</script>
<style scoped>

</style>
