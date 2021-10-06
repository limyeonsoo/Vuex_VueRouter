<template>
  <div class="frog" @click="onClickFrog" :style="{backgroundColor:name}">

  </div>
</template>

<script>
export default {
  name: "Frog",
  props:{
    number: Number,
    name: String,
    age: Number,
  },
  methods: {
    onClickFrog(){
      this.$emit('frog-clicked', this.number);
    }
  }
}
</script>

<style scoped>
.frog{
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
</style>