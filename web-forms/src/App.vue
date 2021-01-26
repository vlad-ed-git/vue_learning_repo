<template>
<div class="container">
  <div class="row">
    <div class="offset-1 col-10">
      <SignUpForm />
    </div>
  </div>
</div>
</template>

<script>
import SignUpForm from './components/SignUpForm.vue'
export default {
  name: 'App',
  components: {
      SignUpForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif i !important;
  -webkit-font-smoothing: antialiased im !important;
  -moz-osx-font-smoothing: grayscale im !important;
}

body{
  margin: 0;
  background: #eeeeee;
}
.colorBlack{
  color: #000000;
}

.colorWhiteBg{
  background-color: #fff;
}

.colorErrors{
  color : #ff0000;
}
</style>
