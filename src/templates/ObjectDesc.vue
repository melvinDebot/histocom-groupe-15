<template>
  <div class="contentObjet">
    <div class="contentName">
      <ButtonBack :backgroundColor="currentDesc[currentActivity].backgroundButton" @click="$router.go(-1)"/>
      <h2>{{ currentDesc[currentActivity].objectTitle }}</h2>
      <div class="contentImg" :style="{backgroundColor : currentDesc[currentActivity].backgroundImg}">
        <img :src="getObjectPath(currentDesc[currentActivity].imgName)" alt="image" />
      </div>
    </div>
    <div class="contentVideo" :style="{backgroundImage : `url(${getBackgroundPath(currentDesc[currentActivity].background)})`}">
      <div>
        <div class="video">
          <iframe
            :src="currentDesc[currentActivity].video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>{{ currentDesc[currentActivity].text }}</p>
        <router-link :to="{name:'Quizz', params: {type: $route.params.type}}">
          <button>Lance le quizz</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import objectDesc from '@/utils/objectDesc.json';
import ButtonBack from '../components/ButtonBack.vue'
export default {
  name: 'ObjectDesc',
  components : {
    ButtonBack
  },
  methods: {
    getObjectPath(img){
      return require(`@/assets/object-periode/${img}.png`)
    },
  getBackgroundPath(img){
      return require(`@/assets/background/${img}.png`)
    }
  },
  computed: {
    desc() {
      return objectDesc;
    },
    currentDesc() {
      return this.desc[this.$route.params.period];
    },
    currentActivity() {
      return this.$route.params.activity;
    },
  },
};
</script>

<style lang="scss">
.contentObjet {
  width: 100%;
  height: 100vh;
  display: flex;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 5;
  background: white;
  .contentName {
    width: 40%;
    height: 100%;
    display: flex;
    z-index: 5;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    padding-left: 20px;
    h2 {
      font-size: 38px;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-weight: 500;
      color: #6d6d6d;
      text-align: start;
      margin-bottom: 20px;
      max-width: 400px;
      margin-top: 90px;
      span {
        color: white;
      }
    }
    .contentImg {
      width: 485px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      
    }
  }
  .contentVideo {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    div {
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      button {
        width: 297px;
        height: 56px;
        background: #4f5a67;
        border-radius: 10px;
        color: white;
        border: none;
        font-family: Gotham rounded, Helvetica, Arial, sans-serif;
        font-weight: 350;
        font-size: 20px;
        margin-top: 20px;
      }
      .video {
        width: 100%;
        iframe {
          border-radius: 5px;
          width:560px;
          height:315px;
        }
      }
      p {
        font-size: 16px;
        font-family: Gotham rounded, Helvetica, Arial, sans-serif;
        color: white;
        text-align: start;
      }
    }
  }
}
</style>