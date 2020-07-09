<template>
  <div class="app">
    <div class="nav">
      <div class="block">
        <div class="blockText">
          <router-link :to="{path : '/Periode/prehistoire' }">La préhistoire</router-link>
        </div>
      </div>
      <div class="block">
        <div class="blockText">
          <router-link :to="{path : '/Periode/egypte' }">Egypte</router-link>
        </div>
      </div>
      <div class="block">
        <div class="blockText">
          <router-link :to="{path : '/Periode/moyen-age' }">Moyen-âge</router-link>
        </div>
      </div>
      <div class="block">
        <div class="blockText">
          <router-link :to="{path : '/Periode/moderne' }">Moderne</router-link>
        </div>
      </div>
      <div class="block">
        <div class="blockText">
          <router-link :to="{path : '/Periode/actuelle' }">Actuelle</router-link>
        </div>
      </div>
      <div class="bar"></div>
    </div>
    <transition-page>
      <router-view />
    </transition-page>
  </div>
</template>

<script>
import TransitionPage from "./transition/TransitionPage.vue";
export default {
  name: "App",
  components: {
    TransitionPage
  }
};
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.app {
  font-family: Gotham rounded, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav {
  //width: 100%;
  width: 80%;
  height: auto;
  position: absolute;
  display: flex;
  //bottom: 2.5em;
  bottom: 10px;
  //left: 0;
  left: 10%;
  justify-content: space-evenly;
  z-index: 3;
  .block {
    width: 140.73px;
    height: 115.27px;
    display: flex;
    border-radius: 10px 10px 10px 10px;
    z-index: 1;
    margin-top: 50px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
    &:active {
      color: red;
    }
    .blockText {
      width: 100%;
      height: 20px;
      align-self: flex-end;
      text-align: center;
      border-radius: 0px 0px 10px 10px;
      &:nth-child(1) {
        background: #8f9caf;
      }
      &:nth-child(2) {
        background: #d36d33;
      }
      a {
        color: white;
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
  .bar {
    position: absolute;
    width: 100%;
    height: 33px;
    background: #ebeff0;
    border-radius: 20px;
    z-index: 0;
    top: 6em;
  }
}
.block:nth-child(1) {
  background: #aebfd7;
  background-image: url('./assets/thumnail/perso-prehistoire.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
}
.block:nth-child(2) {
  background: #ffbb95;
  background-image: url('./assets/thumnail/perso-egypte.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
}
.block:nth-child(3) {
  background: #aed7c8;
  background-image: url('./assets/thumnail/perso-moyen-age.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
}
.block:nth-child(4) {
  background: #ec8181;
  background-image: url('./assets/thumnail/perso-moderne.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
}
.block:nth-child(5) {
  background: #e299e3;
  background-image: url('./assets/thumnail/perso-actuelle.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
}
</style>