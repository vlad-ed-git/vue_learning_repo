<template>
 <h1>Reaction Timer</h1>
 <button @click="start" v-bind:disabled="isPlaying">play</button>

<Block v-if="isPlaying" v-bind:delay="random_delay_ms" @end="endGame"/>
<p v-if="score">Reaction Time {{ score }}</p>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {
    Block
  },
  data(){
    return {
      isPlaying : false,
      random_delay_ms: null,
      score:null,
    }
  },
  methods: {
    start(){
      //get random n between 0 and 5000
      // add 2000 ms to it
      this.random_delay_ms = 2000 + (Math.random() * 5000)
      this.isPlaying = true;
      console.log(this.random_delay_ms);
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false; 
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
