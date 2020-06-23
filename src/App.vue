<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Maison</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition-page>
    <router-view/>
    </transition-page>
  </div>
</template>

<script>
import TransitionPage from './transition/TransitionPage.vue';

export default {
  name :'App',
  components : {
    TransitionPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}




</style>
