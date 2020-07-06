<template>
  <div class="containt-slider">
    <div class="slider">
      <h2>Les objets de communication</h2>
      <div id="slide">
        <div v-for="(bloc, index) in blocs" :key="'bloc' + index" :style="{backgroundColor : bloc.backgroundColor}">
          <img :src="getImagePath(bloc.imgName)" />
          <router-link 
            class="link"
            :to="{name:'ObjectDesc', params: {period: currentPeriodName , activity : bloc.routeParam}}"
          >
            <h4>{{ bloc.title }}</h4>
          </router-link>
        </div>
      </div>
      <div class="control">
        <img :src="this.arrowOne" alt="left arrow" @click="previous"/>
        <img :src="this.arrowTwo" alt="left arrow" @click="next"/>
    </div>
    </div>
  </div>
</template>

<script>
import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
export default {
  name : 'Slider',
  data : function(){
    return {
      arrowOne : leftArrow,
      arrowTwo: rightArrow,
      direction: 'forward',
      frame: 2,
      count : 0
    }
  },
  props: {
    blocs: {
      type: Array,
      required: true
    }
  },
  computed : {
    currentPeriodName(){
      return this.$route.params.type
    }
  },
  created(){
    // var slide = setInterval(()=>this.slideLoop(this.direction),2000)
  },
  methods:{
    slideLoop(pass) {
      let steps = this.items.length - this.frame
      if(this.count >= steps & pass == "forward"){
        this.direction = "backward"
        this.previous()
        return
      }
      if(this.count <= steps & pass == "backward"){
        if(this.count <= 0){
          this.count = 0
          this.direction = "forward"
          this.next();
          return
        }
        this.previous()
        return
      }
      if(this.count < steps & pass == "forward"){
        if(this.count < 0){
          this.resetScroll()
          return
        }else if(this.count == 0){
          this.next()
          return
        }
        this.next()
        return
      }
      this.resetScroll()
    },
    resetScroll(){
      this.count = 0
      this.direction = "forward"
      this.scroll("reset")
    },
    previous() {
      this.count--
      this.scroll("previous")
    },
    next() {
      this.count++
      this.scroll("next")
    },
    scroll(position) {
      let el = document.getElementById("slide")
      let pos = 0;
      let id = setInterval(frame, 5);
      let num = this.items.length - this.frame
      let width = 265;
      let resize = num * width
      let check = position == "reset" ? resize : width 
      function frame() {
        if (pos == check) {
          clearInterval(id);
        } else {
          pos += 5; 
          el.scrollLeft += position === 'next' ? 5 : -5
        }
      }
    },
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .containt-slider{
    width: 100%;
    height: 100%;
    //margin-top: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    z-index: 5;
    background: white;
    
    .slider {
      width: 549px;
      height: 618px;
      h2{
        font-weight: 500;
        font-size: 38px;
        text-align: start;
        color: #6D6D6D;
      }
    }
  }
  #slide {
  display: flex;
  width: 90%;
  overflow: hidden;
  align-items: flex-start;
  div {
    min-width: 265px;
    height: 324px;
    padding-right: 20px;
    box-sizing: border-box;
    overflow: hidden;
    margin-right: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 162px;
      height: 162px;
      display: block;
    }
    .link{
      text-decoration: none;
      h4{
        font-weight: 500;
        font-size: 20px;
        color: white;
        text-align: center;
      }
    }
    
  }
}
.control{
  width: 227px;
  height: 57px;
  margin: 20px auto;
  background: #4F5A67;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  img {
    cursor: pointer;
    width: 15px;
  }
}
</style>