<template>
  <div class="page">
    <div class="page--containt">
      <img :src="this.image" alt="personnage"  class="perso"/>
      <div class="page-text">
        <h2>{{ currentDataPage.title }}</h2>
        <h4>{{ currentDataPage.subtitle }}</h4>
        <p>{{ currentDataPage.text }}</p>
        <router-link :to="{path : currentDataPage.link }"><button>Découvrir</button></router-link>
      </div>
    </div>
    <div class="page--containt">
      <Slider />
    </div>
  </div>
</template>

<script>
import img from '../assets/images/perso-one.svg';
import Slider from '../components/Slider.vue';


export default {
  name : 'PageObjet',
  components : {
    Slider
  },
  data : ()=> {
    return {
      image : img,
      pages : {
        'object' : {
          title : 'LES OBJETS DE COMMUNICATIONnn',
          titleTool : 'Nom de l/outil',
          subtitle:'Afrique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          link: '/objectdesc/object'
        },
        'objectTwo' : {
          title : 'LES OBJETS DE COMMUNICATIO',
          titleTool : 'Nom de l/outil',
          subtitle:'Afrique, Europe, Asie',
          text : 'Les premières histoires de la vie des Hommes nous sont apportées par les peintures rupestres retrouvées sur les parois des grottes. Les Hommes des cavernes racontaient leurs chasses, les danger et leur vie commune à travers des dessins.',
          link: '/objectdesc/objectTwo'
        },
      }
    }
  },

  computed : {
    currentDataPage(){
      return this.pages[this.$route.params.type]
    }
  },
  
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
  .page{
    width: 100%;
    height: 100vh;
    display: flex;
    .page--containt{
      width: 50%;
      height: 100%;
      &:nth-child(1){
        width: 80%;
        background-image: url('../assets/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .page-text{
        width: 410px;
        height: 337px;
        text-align: left;
        color: white;
        h2 {
          font-weight: 500;
          font-size: 38px;
          margin-top: 0;
          margin-bottom: 0;
        }
        h4{
          font-weight: normal;
          font-size: 30px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        p{
          font-weight: 500;
          font-size: 16px;
        }
        button {
          width: 266px;
          height: 48px;
          background: #4F5A67;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          border: none;
          color: white;
          text-align: center;
          font-weight: 500;
          font-size: 20px;
        }
      }
      .slider{
        width: 549px;
        height: 618px;
        #slide {
          display: flex;
          overflow: hidden;
          align-items: flex-start;
        }
      }
    }
  }
</style>


