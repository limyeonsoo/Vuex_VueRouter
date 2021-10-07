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
      return this.$store.state.frogList.filter(frog => frog.name === this.color)
    }
  },
  mounted(){
    this.color = router.currentRoute.params.color;
  },
}

</script>

<style>
  .pond{
    display: flex;
    justify-content: space-between;
  }
</style>