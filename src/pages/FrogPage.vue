
<template>
  <div id="froggy">
    <FrogWorld @frog-clicked="onClickFrog" v-bind:msg="appMsg" v-bind:name="appName" :msg-list="appList" :frog-list="frogList"/>
  </div>
</template>
<script>
import FrogWorld from '../components/FrogWorld';
import {mapState} from 'vuex';

export default {
  name: 'FrogPage',
  data(){
    return {
      appName: 'kwang',
      appMsg: 'welcome sds',
      appList: [
        { name: 'kwang', message: 'hi'},
        { name: 'milo', message: 'hello'},
        { name: 'clover', message: 'bye'},
        { name: 'kebab', message: 'foo-bar'},
      ],
    }
  },
  components:{
    FrogWorld
  },
  computed: mapState({
    frogList: state => state.frogList,
  }),
  methods: {
    onClickFrog(number){
      //this.frogList.push({age: this.frogList.length+1, name: this.frogList[number].name});
      this.$store.commit('generate', {
        age: this.frogList.length+1,
        name: this.frogList[number].name
      });
      console.log(number);
      // this.$store.commit('generate', 10, 'blue');
      // let currentState = this.$store.state.frogList;
      // console.log(currentState);
      // this.$store.state.generate(currentState+1, currentState[number].name)
    },
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
