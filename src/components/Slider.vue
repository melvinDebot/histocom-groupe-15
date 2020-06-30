<template>
  <div class="containt-slider">
    <div class="slider">
      <h2>Les objets de communication</h2>
      <div id="slide">
        <div v-for="(item, index) in items" :key="index">
          <img :src="item.src" style="width:100%" />
          <div>
            <h5>Test</h5>
          </div>
        </div>
      </div>
      <div class="control">

      <p @click="previous" class="prev">
        PREVIOUS
      </p>
      <P @click="next" class="next">
        NEXT
      </P>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name : 'Slider',
  data : function(){
    return {
      items : [
        {
          id:1,
          src : 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          id:2,
          src : 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          id:3,
          src : 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          id:4,
          src : 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      direction: 'forward',
      frame: 2,
      count : 0
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
      let width = 250;
      let resize = num * width
      let check = position == "reset" ? resize : width 
      function frame() {
        if (pos == check) {
          clearInterval(id);
        } else {
          pos += 5; 
          if(position == 'next'){
            el.scrollLeft += 5
          } else {
            el.scrollLeft -= 5
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .containt-slider{
    width: 583px;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;

    .slider {
      width: 549px;
      height: 618px;
    }
  }

  #slide {
  display: flex;
  overflow: hidden;
  align-items: flex-start;
}
.container {
  padding-left: 50px;
  width: 500px;
  padding-bottom: 100px;
}
.prev {
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}
.next {
  display: inline-block;
  cursor: pointer;
}
.control {
  
}
#slide > div {
  min-width: 250px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
#slide > div > img {
  height: 180px;
  display: block;
}
#slide > div > div {
  
  color: #6D6D6D;
  font-size: 20px;
}
#slide > div > div > h6 {
    margin: 0;
    font-size: 16px;
}
#slide > div > div > p {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
}
</style>


