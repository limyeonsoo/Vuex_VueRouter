<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>
<script>
import store from './store/frogStore';

export default {
  name: 'App',
  store,
  beforeMount(){
    let preData = JSON.parse(sessionStorage.getItem('frogList'));
    console.log(preData);
    if(preData === null){
      this.$store.commit('init');
    } else if(preData.length === 0) {
      this.$store.commit('init');
    } else{
      this.$store.commit('load', preData);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
