<template>
  <div class="containt">
    <img :src="currrentData.rigthPepoel" alt="personnage préhistoire" class="containt--img"/>
    <div class="containt--text">
      <h3>{{ currrentData.title }}</h3>
      <h4>{{ currrentData.subtitle }}</h4>
      <p>{{ currrentData.text }}</p>
      <router-link :to="{path : currrentData.link }"><button>Découvrir</button></router-link>
    </div>
    <img :src="currrentData.leftPepoel" alt="personnage préhistoire" class="containt--img two"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name : 'PagePeriode',
  data : ()=> {
    return {
      datasPage : {
        'pre-histoire' : {
          title : 'LA PREHISTOIRE',
          subtitle : 'Afrique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          rigthPepoel :  require('@/assets/images/perso-one.svg'),
          leftPepoel : require('../assets/images/perso-two.svg'),
          link: '/pageobjet/object'
        },
        'histoire' : {
          title : 'L\'histoire',
          subtitle : 'Amérique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          rigthPepoel :  require('@/assets/images/perso-one.svg'),
          leftPepoel : require('@/assets/images/perso-two.svg'),
          link : '/pageobjet/objectTwo'
        }
      }
    }
  },
  mounted() {
    axios
    .get('https://my-json-server.typicode.com/melvinDebot/db_histocom/pagePeriode')
    .then(response => (this.db = response))
    console.log(this.db)
  },
  computed: {
    currrentData () {
      return this.datasPage[this.$route.params.type]
    }
  },
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .containt{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    .containt--img{
      position: absolute;
      bottom: 0;
      z-index: 0;
      &:nth-child(2){
        right: 0;
      }
    }
    .two {
      right: 0;
    }
    .containt--text{
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
        width: 266px;
        height: 48px;
        background: #4F5A67;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        text-align: center;
        line-height: 48px;
        font-size: 20px;
        border: none;
        color: white;
        cursor: pointer;
      }
    }
  }
</style>