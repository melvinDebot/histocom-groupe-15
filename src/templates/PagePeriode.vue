<template>
  <div
    class="page-periode"
    :style="{backgroundImage : `url(${getBackgroundPath(currentPeriod.background)})`}"
  >
    <img
      :src="getPersonPath(currentPeriod.rigthPerson)"
      alt="personnage préhistoire droite"
      class="img-person left"
    />
    <div class="page-periode-text">
      <h3>{{ currentPeriod.title }}</h3>
      <h4>{{ currentPeriod.subtitle }}</h4>
      <p>{{ currentPeriod.text }}</p>
      <router-link :to="{name:'PageObject', params: {type: $route.params.type}}">
        <button>Découvrir</button>
      </router-link>
    </div>
    <img
      :src="getPersonPath(currentPeriod.rigthPerson)"
      alt="personnage préhistoire"
      class="img-person right"
    />
  </div>
</template>

<script>
import periods from '@/utils/periods.json';
export default {
  name: 'PagePeriode',
  methods: {
    getBackgroundPath(img){
      return require(`@/assets/background/${img}.png`)
    },
    getPersonPath(img){
      return require(`@/assets/perso-periode/${img}.png`)
    }
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
.page-periode {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  .img-person {
    height: 80vh;
    position: absolute;
    top: 20vh;
    z-index: 0;
  }
  .left{
    left: 20px;
  }
  .right {
    right: 40px;
  }
  .page-periode-text {
    width: 427px;
    height: 300px;
    color: white;
    margin-left: 30%;
    margin-top: 10em;
    text-align: left;
    h3 {
      font-size: 38px;
      margin: 0;
      padding: 0;
    }
    h4 {
      font-size: 30px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      margin: 0;
      padding: 0;
      margin-bottom: 15px;
    }
    button {
      padding: 15px 25px;
      background: #4f5a67;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      text-align: center;
      font-size: 25px;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
}
</style>