<template>
  <div class="containt--objet">
    <div class="containt-name">
      <button @click="$router.go(-1)">
        <img :src="fleche" alt />
        Retour
      </button>
      <h2>{{ currentDesc[currentActivity].objectTitle }}</h2>
      <div class="containt-img">
        <img :src="getImagePath(currentDesc[currentActivity].imgName)" alt="image" />
      </div>
      <h4>{{ currentDesc[currentActivity].objectTitle }}</h4>
    </div>
    <div class="containt-video">
      <div>
        <router-link :to="{name:'Quizz', params: {type: $route.params.type}}">
          <button>Lancez les questions</button>
        </router-link>
        <div class="video">
          <iframe
            width="560"
            height="315"
            :src="currentDesc[currentActivity].video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>{{ desc.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import objectDesc from '@/utils/objectDesc.json';

export default {
  name: 'ObjectDesc',
  data: () => ({}),
  methods: {
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`);
    },
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
.containt--objet {
  width: 100%;
  height: 100vh;
  display: flex;
  // background-image: url('../assets/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  .containt-name {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    button {
      padding: 15px 25px;
      background: #ebeff0;
      border-radius: 10px;
      border: none;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #7e92ae;
      margin-top: 20px;
      img {
        width: 15px;
      }
    }
    h2 {
      font-size: 38px;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
      font-weight: 500;
      color: #6d6d6d;
      text-align: start;
      max-width: 400px;
      span {
        color: white;
      }
    }
    .containt-img {
      width: 485px;
      height: 357px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 15px;
    }
    h4 {
      font-weight: 500;
      font-size: 30px;
      color: #fff;
      font-family: Gotham rounded, Helvetica, Arial, sans-serif;
    }
  }
  .containt-video {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
        margin-top: -20px;
        margin-bottom: 20px;
      }
      .video {
        width: 100%;
        background: #c4c4c4;
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
