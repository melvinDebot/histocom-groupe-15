<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import PagePeriode from '../templates/PagePeriode.vue';
// import PageObjet from '../templates/PageObjet.vue'
import Intro from '../components/Intro.vue';

export default {

  name: 'Home',
  components: {
    PagePeriode,
    // PageObjet,
    Intro
  },
  data : ()=> {
    return {
      toggle : true,
      showPage : false
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
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
</style>

