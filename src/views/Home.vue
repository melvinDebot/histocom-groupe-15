<template>
  <div class="home">
    
  </div>
</template>

<script>
import PagePeriode from '../templates/PagePeriode.vue';
import Intro from '../components/Intro.vue';
export default {
  name: 'Home',
  components: {
    PagePeriode,
    Intro
  },
  data : ()=> {
    return {
      toggle : true,
      showPage : false,
    }
  },
  methods : {
    showTemplate(){
      this.toggle = false
    },
    showPage(){
      this.showPage = true
    }
  }
  
}
</script>

<style lang="scss">
  .home{
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
</style>