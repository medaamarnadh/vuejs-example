
<template>

  <div id="app">

    <img alt="Vue logo" width="100" heigth="100" src="./assets/logo.png"> 
    <h1>Welcome</h1>    
    <h4>to</h4>
    <h2>Blog Posts</h2>
    <router-view> </router-view>
  </div>

</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
