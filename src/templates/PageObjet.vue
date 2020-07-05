<template>
  <div class="page">
    <div
      class="page--containt"
      :style="{backgroundImage : `url(${getImagePath(currentPeriod.objects[0].background)})`}"
    >
      <ButtonBack :backgroundColor="currentPeriod.objects[0].buttonBackground" @click="$router.go(-1)"/>
      <img :src="this.image" alt="personnage" class="img-person-left" />
      <div class="page-text">
        <h2>{{ currentPeriod.objects[0].titlePeriod }}</h2>
        <h4>{{ currentPeriod.objects[0].subtitle }}</h4>
        <p>{{ currentPeriod.objects[0].text }}</p>
      </div>
    </div>
    <div class="page--containt">
      <Slider :blocs="currentPeriod.sliderBlocs" />
    </div>
  </div>
</template>

<script>

import periods from '@/utils/periods.json';
import img from '../assets/images/perso-one.png';
import arrowBack from '../assets/icons/left-arrow.png';
import Slider from '../components/Slider.vue';
import ButtonBack from '../components/ButtonBack.vue'

export default {
  name: 'PageObjet',
  components: {
    Slider,ButtonBack
  },
  data: () => ({
    image: img,
    arrowBack : arrowBack
  }),
  methods: {
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`);
    },
  },
  computed: {
    periods() {
      return periods;
    },
    currentPeriod() {
      return this.periods.find(
        (period) => period.periodName === this.$route.params.type,
      );
    },
  },
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  .page--containt {
    width: 50%;
    height: 100%;
    
    .img-person-left {
      margin-top: 20vh;
      margin-left: 20px;
      height: 80vh;
    }
    &:nth-child(1) {
      width: 80%;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .page-text {
      width: 410px;
      text-align: left;
      color: white;
      h2 {
        font-weight: 500;
        font-size: 38px;
        margin-top: 0;
        margin-bottom: 0;
      }
      h4 {
        font-weight: normal;
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 0;
      }
      //p{
      //  font-weight: 500;
      //  font-size: 16px;
      //}
      button {
        width: 266px;
        height: 48px;
        background: #4f5a67;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        border: none;
        color: white;
        text-align: center;
        font-weight: 500;
        font-size: 20px;
      }
    }
    .slider {
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
#nav {
  //display: none;
}
</style>
