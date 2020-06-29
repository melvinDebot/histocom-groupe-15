<template>
  <div class="containt">
    <div class="containt--text">
      <h3>{{ title }}</h3>
      <div class="picture">
        <img src="{{ image }}">
      </div>
      <p>{{ nom }}</p>
    </div>
  </div>
</template>

<script>
import img from '../assets/images/perso-one.svg';
import imgTwo from '../assets/images/perso-two.svg';
import test from '../assets/images/TEST.jpg';


export default {
  name : 'PagePeriode',
  data : ()=> {
    return {
      image : img,
      imageTwo : imgTwo,
      test : test
    }
  },
  
  props : {
    title : {
      type : String,
      default : 'LES OBJETS DE COMMUNICATION'
    },
    nom : {
      type : String,
      default : 'Nom de l\'outil'
    },
    text : {
      type : String,
      default : 'Ceci est un texte sur un objet c\'est trop ouf quoi...genre un objet tu imagines?! c\'est trop fifou lol !'
    },
    image : {
      type : String,
      default : '../assets/images/TEST.jpg'
    },
  }
}
</script>

<style lang="scss">
  .containt{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999999999;
    margin-right: 0%;
    background-color: white;
    .containt--text{
      color: black;
      width: 70%;
      margin-left: 15%;
      margin-top: -100px;
      text-align: left;
      h3{
        font-size: 23px;
        margin: 0;
        padding: 0;
      }
      .picture{
        height: 300px;
        width: 300px;
        background-color: #AEBFD7;
        margin: 15px 0px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      p{
        font-size: 16px;
        margin: 0;
        padding: 0;
        margin-bottom:15px;
      }
    }
  }
</style>


