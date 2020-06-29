<template>
  <div class="containt">
    <img :src="this.image" alt="personnage préhistoire" class="containt--img"/>
    <div class="containt--text">
      <h3>{{ title }}</h3>
      <h4>{{ subtitle }}</h4>
      <p>{{ text }}</p>
      <button @click="show()">Découvrir</button>
    </div>
    <img :src="this.imageTwo" alt="personnage préhistoire" class="containt--img two"/>
  </div>
</template>

<script>
import img from '../assets/images/perso-one.svg';
import imgTwo from '../assets/images/perso-two.svg';


export default {
  name : 'PagePeriode',
  data : ()=> {
    return {
      image : img,
      imageTwo : imgTwo
    }
  },
  
  props : {
    title : {
      type : String,
      default : 'LA PREHISTOIRE'
    },
    subtitle : {
      type : String,
      default : 'Afrique, Europe, Asie'
    },
    text : {
      type : String,
      default : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.'
    },
    show : {
      type: Function
    }
  }
}
</script>

<style lang="scss">
  .containt{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

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


