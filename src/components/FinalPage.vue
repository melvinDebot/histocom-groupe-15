<template>
  <div class="content">
    <Logo/>
    <Fireworks />
    <h1 class="finalTitle">Félicitation tu as réussi à terminer 😁</h1>
    <router-link :to="{path : '/' }">Revenir à la page d'accueil</router-link>
  </div>
</template>

<script>
import Fireworks from '../components/Fireworks.vue';
import Logo from '../components/Logo.vue'
export default {
  name : "finalPage",
  components : {
    Fireworks,
    Logo
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #AEBFD7;
  color: white;
  .finalTitle{
    margin-top: 12.5%;
  }
  a{
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
}

</style>


