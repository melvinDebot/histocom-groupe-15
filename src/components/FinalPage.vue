<template>
  <div>
    <h1>Fin du jeu</h1>
    <router-link :to="{path : '/' }">Revenir à la page d'accueil</router-link>
  </div>
</template>

<script>
export default {
  name : "finalPage"
}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #AEBFD7;
  color: white;
  h1{
    margin-top: 12.5%;
  }
  a{
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
}

</style>


