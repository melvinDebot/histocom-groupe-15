<template>
  <div class="page-periode">
    <img :src="routingDataPeriode.rigthPerson" alt="personnage préhistoire droite" class="img-person"/>
    <div class="page-periode-text">
      <h3>{{ routingDataPeriode.title }}</h3>
      <h4>{{ routingDataPeriode.subtitle }}</h4>
      <!--<p>{{ routingDataPeriode.text }}</p>-->
      <router-link :to="{path : routingDataPeriode.link }"><button>Découvrir</button></router-link>
    </div>
    <img :src="routingDataPeriode.rigthPerson" alt="personnage préhistoire" class="img-person right"/>
  </div>
</template>

<script>
export default {
  
  name : 'PagePeriode',
  data : ()=> {
    return {
      datasPage : {
        'pre-histoire' : {
          title : 'LA PREHISTOIRE',
          subtitle : 'Afrique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          rigthPerson :  require('@/assets/images/perso-one.svg'),
          leftPerson : require('../assets/images/perso-two.svg'),
          link: '/pageobjet/object'
        },
        'histoire' : {
          title : 'L\'histoire',
          subtitle : 'Amérique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          rigthPerson :  require('@/assets/images/perso-one.svg'),
          leftPerson : require('@/assets/images/perso-two.svg'),
          link : '/pageobjet/objectTwo'
        }
      }
    }
  },

  computed: {
    routingDataPeriode () {
      return this.datasPage[this.$route.params.type]
    }
  },
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .page-periode{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    .img-person{
      height: 80vh;
      position: absolute;
      top: 20vh;
      z-index: 0;
      margin-left: 20px;
      &:nth-child(2){
        right: 0;
      }
    }
    .right {
      right: 40px;
    }
    .page-periode-text{
      width: 427px;
      height: 300px;
      color: white;
      margin-left: 30%;
      margin-top: 10em;
      text-align: left;
      h3{
        font-size: 38px;
        margin: 0;
        padding: 0;
      }
      h4{
        font-size: 30px;
        margin-top: 15px;
        margin-bottom:15px;
      }
      p{
        font-size: 16px;
        margin: 0;
        padding: 0;
        margin-bottom:15px;
      }
      button {
        //width: 266px;
        //height: 48px;
        padding: 15px 25px;
        background: #4F5A67;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        text-align: center;
        //line-height: 48px;
        font-size: 25px;
        border: none;
        color: white;
        cursor: pointer;
      }
    }
  }
</style>