<template>
  <div class="contentSlider">
    <div class="slider">
      <h2>Les objets de communication</h2>
      <Hooper :mouseDrag="false" ref="carousel" :itemsToShow="2" pagination="no">
        <slide
          class="slide"
          v-for="(bloc, index) in blocs"
          :key="'bloc' + index"
          :style="{backgroundColor : bloc.backgroundColor}"
        >
        <div class="slide-bloc" @click="$router.push({name:'ObjectDesc', params: {period: currentPeriodName , activity : bloc.routeParam}})">
          <img :src="getObjectPath(bloc.imgName)" />
          <h4>{{ bloc.title }}</h4>
        </div>
        </slide>
      </Hooper>
      <div class="control">
        <button @click="previous"><img :src="this.arrowOne" alt="left arrow" /></button>
        <button  @click="next" ><img :src="this.arrowTwo" alt="left arrow"/></button>
      </div>
    </div>
  </div>
</template>

<script>
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Slider",
  data: function() {
    return {
      arrowOne: leftArrow,
      arrowTwo: rightArrow,
      direction: "forward",
      frame: 1,
      count: 0
    };
  },
  components: {
    Hooper,
    Slide
  },
  props: {
    blocs: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentPeriodName() {
      return this.$route.params.type;
    }
  },
  methods: {
    previous() {
      this.$refs.carousel.slidePrev();
    },
    next() {
      this.$refs.carousel.slideNext();
    },
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`);
    },
    getObjectPath(img) {
      return require(`@/assets/object-periode/${img}.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.contentSlider{
  
  width: auto;
  height: 100vh;
  background: white;
  .slider{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .slide-bloc{
      
      width: 265px;
      height: 324px;
    }
  }
}

::v-deep .hooper {
  height: 324px;
  border-radius: 15px;
  .slide {
    margin: 10px;
    background: #AEBFD7;
  }
  h4{
    font-size: 20px;
    color: #6D6D6D;
    text-align: center;
  }
}

h2{
  font-size: 38px;
  color: #6D6D6D;
  font-weight: 500;
}


.control {
  button {
    background: #4F5A67;
    border: none;
    padding: 4px;
    width: 127px;
    height: 57px;
  }
  img {
    cursor: pointer;
    width: 15px;
  }
}
</style>