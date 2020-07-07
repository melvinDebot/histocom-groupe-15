<template>
  <div class="intro">
    <img :src="this.image" alt="personnage"  class="perso"/>
    <div class="intro--text">
      <h1>Bienvenue sur HistoCom <br />apprendre n’a jamais été aussi simple !</h1>
      <div class="text--containt">
        <img :src="this.imageTwo" alt="book intro" />
        <p>Découvre la communication à travers le temps !</p>
        <router-link :to="{path : '/Periode/prehistoire' }"><button>C'est parti !</button></router-link>
      </div>
      <div class="text--containt">
        <img :src="this.iconQuestion" alt="book intro" />
        <p>Valide tes connaissances en commençant par un quizz</p>
        <router-link :to="{path : '/quizz/prehistoire' }"><button>C'est parti !</button></router-link>
      </div>
    </div>
    <p class="disclaimer">Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié</p>
  </div>
</template>

<script>
import img from '../assets/images/perso-one.png';
import book from '../assets/images/book.png';
import iconQuestion from '../assets/images/quizz.png';
import gsap , {Power3}from 'gsap'
export default {
  name : 'Intro',
  props : {
    show : {
      type : Function
    }
  },
  data : ()=> {
    return {
      image : img,
      imageTwo : book,
      iconQuestion : iconQuestion
    }
  },
  mounted : ()=> {
    gsap.fromTo('.perso',3, {x : -150, opacity : 0}, { x:0, opacity : 1})
    gsap.to('.text--containt',1, {
      y: -6,
      opacity : 1,
      ease : Power3.easeInOut,
      delay: 3
    })
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .intro{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    background-image: url('../assets/background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    .perso{
      height: 80vh;
      position: absolute;
      top: 20vh;
      left: 20px;
    }
    .intro--text{
      margin-left: 30%;
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1{
        margin-left: 0px;
        font-weight: 500;
        font-size: 38px;
        text-align: left;
        color: white;
        overflow: hidden;
        animation: typing 3s steps(40, end);
        white-space: nowrap;
      }
      .text--containt{
        width: 90%;
        height: 138px;
        background:white;
        border-radius: 20px;
        margin-top: 15px;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content:space-between;
        img{
          width: 67px;
          margin-left: 20px;
          margin-right: 10px;
        }
        p{
          font-size: 30px;
          font-weight: 500;
          color: #AEBFD7;
        }
        button {
          padding: 15px 30px;
          background: #4F5A67;
          margin-right: 20px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          color: white;
          font-weight: 500;
          font-size: 30px;
          cursor: pointer;
        }
      }
    }
    .disclaimer{
      width: 80%;
      position: absolute;
      left: 50%;
      bottom: 4%;
      transform: translate(-50%, -4%)
    }
  }
@keyframes typing {
    from { 
      width: 0% 
    }
    to { 
      width: 100% 
    }
}
</style>