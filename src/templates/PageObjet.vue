<template>
  <div class="containt">
    <div class="containt--text">
      <h3>{{ currentDataPage.title }}</h3>
      <div class="picture">
        <img :src="required(`image`)">
      </div>
      <p>{{ currentDataPage.titleTool }}</p>
    </div>
  </div>
</template>

<script>
// import img from '../assets/images/perso-one.svg';
// import imgTwo from '../assets/images/perso-two.svg';
// import test from '../assets/images/TEST.jpg';


export default {
  name : 'PageObjet',
  data : ()=> {
    return {
      pages : {
        'object' : {
          title : 'LES OBJETS DE COMMUNICATION',
          titleTool : 'Nom de l/outil'
        },
        'objectTwo' : {
          title : 'LES OBJETS DE COMMUNICATIO',
          titleTool : 'Nom de l/outil'
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

<style lang="scss">
  .containt{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999999999;
    margin-right: 0%;
    background-color: white;
    .containt--text{
      color: black;
      width: 70%;
      margin-left: 15%;
      margin-top: -100px;
      text-align: left;
      h3{
        font-size: 23px;
        margin: 0;
        padding: 0;
      }
      .picture{
        height: 300px;
        width: 300px;
        background-color: #AEBFD7;
        margin: 15px 0px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      p{
        font-size: 16px;
        margin: 0;
        padding: 0;
        margin-bottom:15px;
      }
    }
  }
</style>


