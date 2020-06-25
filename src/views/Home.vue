<template>
  <div class="home">
    <Intro :show="showTemplate" v-if="this.test === true"/>
    <PagePeriode v-else/>
  </div>
</template>

<script>
// @ is an alias to /src
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
      test : true
    }
  },
  methods : {
    showTemplate(){
      this.test = false
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

