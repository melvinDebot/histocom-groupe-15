<template>
<div class="containt--objet">
  <h2>{{ currentDesc.objectTitle }}</h2>
  <!-- <div class="containt-name">
    <div v-for="(desc, index) in currentPeriod.objectDesc" :key="'bloc' + index" >
      <button>
        <img :src="fleche" alt="" />
        Retour
      </button>
      <h2>{{ desc.objectTitle }}</h2>
      <div class="containt-img">
        <img :src="getImagePath(desc.imgName)" alt="image" />
      </div>
      <h4>{{ desc.objectTitle }}</h4>
      <div class="containt-video">
        <div>
          <router-link :to="{name:'Quizz', params: {type: $route.params.type}}"><button>Lancez les questions</button></router-link>
        <div class="video">
          <iframe width="560" height="315" :src="desc.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>{{ desc.text }}</p>
        </div>
      </div>
    </div>
  </div> -->
</div>
  
</template>

<script>
// import objectOne from '../assets/images/object-painting.png';
// import objectTwo from '../assets/images/object-painting-two.png';

import objectDesc from '@/utils/objectDesc.json'

export default {
  name : 'ObjectDesc',
  data: ()=> {
    return {
      // pages : {
      //   'peinture' : {
      //     titleTool : 'La peinture',
      //     img : objectOne ,
      //     text : 'Les premiers Humains ont commencé à raconter leur histoire à travers des peintures. Ils dessinaient des animaux des hommes et des femmes. Ils utilisaient des poils d’animaux, des os ou des morceaux de bois pour peindre. Ils prenaient ce qu’ils trouvaient autour d’eux pour faire les couleurs (des fleurs pour le jaune, de la terre pour le marron ou du sang pour le rouge..).',
      //   },
      //   'objectTwo' : {
      //     titleTool : 'Les intruments',
      //     img : objectTwo,
      //     text : 'Les premiers Humains ont commencé à raconter leur histoire à travers des peintures. Ils dessinaient des animaux des hommes et des femmes. Ils utilisaient des poils d’animaux, des os ou des morceaux de bois pour peindre. Ils prenaient ce qu’ils trouvaient autour d’eux pour faire les couleurs (des fleurs pour le jaune, de la terre pour le marron ou du sang pour le rouge..).'
      //   },
      // }
    }
  },
  methods : {
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`)
    }
  },
  computed: {
    // currentDataPage(){
    //   return this.pages[this.$route.params.type]
    // },
    currentDesc() {
      return objectDesc[this.$route.params.period];
    }
  },
  
}
</script>

<style lang="scss">
.containt--objet {
  width:100%;
  height: 100vh;
  display: flex;
  // background-image: url('../assets/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  .containt-name{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    button{
      padding: 15px 25px;
      background: #EBEFF0;
      border-radius: 10px;
      border: none;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #7E92AE;
      margin-top: 20px;
      img{
        width:15px;
      }
    }
    h2{
      font-size: 38px;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-weight: 500;
      color: #6D6D6D;
      text-align:start;
      max-width: 400px;
      span{
        color: white;
      }
    }
    .containt-img{
      width: 485px;
      height: 357px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FFF;
      border-radius: 15px;
      img {
      }
    }
    h4{
      font-weight: 500;
      font-size: 30px;
      color: #FFF;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
    }
  }
  .containt-video{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      button{
        width: 297px;
        height: 56px;
        background: #4F5A67;
        border-radius: 10px;
        color: white;
        border: none;
        font-family: Gotham rounded, Helvetica, Arial, sans-serif;
        font-weight: 350;
        font-size: 20px;
        margin-top: -20px;
        margin-bottom: 20px;
      }
      .video{
        width: 100%;
        background: #C4C4C4;
      }
      p{
        font-size: 16px;
        font-family: Gotham rounded, Helvetica, Arial, sans-serif;
        color: white;
        text-align: start
      }
    }
  }
}
</style>