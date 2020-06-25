<template>
  <div class="intro">
    <img :src="this.image" alt="personnage"  class="perso"/>
    <div class="intro--text">
      <h1>Bienvenue sur Histo apprendre n’a jamais été aussi simple !</h1>
      <div class="text--containt">
        <img :src="this.imageTwo" alt="" />
        <p>Découvrer la communication à travers le temps !</p>
        <button @click="show">C'est parti !</button>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../assets/images/perso-one.svg';
import book from '../assets/images/book.png';
import gsap from 'gsap'

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
      imageTwo : book
    }
  },
  mounted : ()=> {
    gsap.to('.perso', 1, {
      x : 20
    })
  }
}
</script>

<style lang="scss">
  .intro{
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;

    .intro--text{
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1{
        font-weight: 500;
        font-size: 38px;
        color: white;
        overflow: hidden;
        animation: typing 3.5s steps(30, end);
        white-space: nowrap;

        
      }
      .text--containt{
        width: 90%;
        height: 158px;
        background:white;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content:space-between;
        img{
          width: 87px;
          margin-left: 20px;
        }
        p{
          font-size: 30px;
          font-weight: 500;
          color: #AEBFD7;
        }
        button {
          width: 270px;
          height: 69px;
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


