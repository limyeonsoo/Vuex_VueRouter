
<template>
  <div id="froggy">
    <FrogWorld @frog-clicked="onClickFrog" v-bind:msg="appMsg" v-bind:name="appName" :msg-list="appList" :frog-list="frogList"/>
  </div>
</template>
<script>
import FrogWorld from '../components/FrogWorld';

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
      frogList:[
        {age:1, name:'red'},
        {age:2, name:'yellow'},
        {age:3, name:'blue'},
        {age:4, name:'green'},
      ]
    }
  },
  components:{
    FrogWorld
  },
  methods: {
    onClickImage(){
      this.appList.push({name:'camel', message:'fooBar'})
    },
    onClickFrog(number){
      console.log(this.frogList[number]);
      this.frogList.push({age: this.frogList.length+1, name: this.frogList[number].name});
      console.log(this.frogList);
    },
    goBack(){
      window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
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
