<template>
  <div id="colorPageWrapper">
    <h1>현재는 {{this.color}}색 페이지</h1>
    <div class="pond">
      <div v-for="(frog, index) in filtering" :key="frog.age">
        <Frog :number="index" :name="frog.name" :age="frog.age"/>
      </div>
    </div>
  </div>
</template>

<script>
import Frog from '../components/Frog';
import router from '../router/index';

export default {
  name: "ColorPage",
  components: {
    Frog,
  },
  data(){
    return{
      frogList: [],
      color: null
    }
  },
  computed:{
    filtering(){
      return this.frogList.filter(frog => frog.name === this.color)
    }
  },
  beforeMount(){
    this.color = router.currentRoute.params.color;
    console.log('update');
    console.log(this.color);
    let data = JSON.parse(localStorage.getItem('frogList'));
    //let data = this.$store.getters.getSameColor(this.color);
    data.map(datum => {
      this.frogList.push(datum);
    })
  },
  beforeUpdate(){
    this.color = router.currentRoute.params.color;
    console.log('update');
    console.log(this.color);
    let data = JSON.parse(localStorage.getItem('frogList'));
    //let data = this.$store.getters.getSameColor(this.color);
    data.map(datum => {
      this.frogList.push(datum);
    })
  },
  beforeDestroy(){
    console.log(this.$store.state.frogList);
    localStorage.setItem('frogList', JSON.stringify(this.$store.state.frogList));
  }
}

</script>

<style>
  .pond{
    display: flex;
    justify-content: space-between;
  }
</style>