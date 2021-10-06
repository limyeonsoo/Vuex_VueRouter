<template>
  <div class="hello">
    <h1 v-show="showTitle">{{title}}</h1>
    <div class="pond">
      <div v-for="(frog, index) in frogList" :key="frog.age">
        <Frog :number="index" :name="frog.name" :age="frog.age" @frog-clicked="onClickFrog"/>
      </div>
    </div>

    <div v-for="human in msgList" :key="human.name">
      <h1>{{human.name}} : {{human.message}}</h1>
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Frog from '../components/Frog'

export default {
  name: 'FrogWorld',
  components:{
    Frog
  },
  // Object
  props: {
    msg: String,
    name: String,
    msgList: Array,
    frogList: Array,
  },

  // Object를 return하는 함수
  data(){
    return{
      index: 0,
    }
  },

  computed: {
    title() {
      return this.name + " : " + this.msg;
    },
    showTitle() {
      return this.index === 0;
    }
  },

  methods:{
    onClickFrog(number){
      this.$emit('frog-clicked', number);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pond{
  display: flex;
  justify-content:space-between;
  flex-wrap : wrap;
}
</style>
