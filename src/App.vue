<template>
  <div id="app">
    <div id="nav">
      <div class="block">
        <div class="block--text">
          <router-link to="/">La préhistoire</router-link> 
        </div>
      </div>
      <div class="block">
        <div class="block--text">
          <router-link to="/about">L'ère romaine</router-link>
        </div>
      </div>
      <div class="block">
        <div class="block--text">
          <router-link to="/about">La préhistoire</router-link>
        </div>
      </div>
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

  width: 100%;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: space-evenly;

  .block {
  width: 140.73px;
  height: 125.27px;
  display: flex;
  border-radius: 10px 10px 10px 10px;

    .block--text{
      width:100%;
      height: 20px;
      align-self: flex-end;
      text-align: center;
      border-radius: 0px 0px 10px 10px;
      &:nth-child(1){
        background: #8F9CAF
      }
      &:nth-child(2){
        background: #D36D33;
      }

      a{
        color: white;
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        text-decoration: none
      }
    } 
  }
}


.block:nth-child(1){
  background: #AEBFD7;
  .block--text:nth-child(1){
    
  }
}
.block:nth-child(2){
  background: #FFBB95;
  
}


// #nav a.router-link-exact-active {
//   color: #42b983;
// }




</style>
