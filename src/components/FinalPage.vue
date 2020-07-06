<template>
  <div>
    <h1>Fin du jeu</h1>
    <router-link :to="{path : '/Periode/prehistoire' }">Revenir dans la page d'accueil</router-link>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>


