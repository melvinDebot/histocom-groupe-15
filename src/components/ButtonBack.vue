<template>
  <div>
    <button :style="{backgroundColor : backgroundColor}" @click="$router.go(-1)">
      <img :src="arrowBack" alt="arrowback" />
      Retour
    </button>
  </div>
</template>

<script>
import arrowBack from '../assets/icons/left-arrow.png';
export default {
  name : 'ButtonBack',
  data : ()=> {
    return {
      arrowBack : arrowBack
    }
    
  },
  props : {
    backgroundColor : {
      type : Object
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: absolute;
  width: 238px;
  height: 56px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 20px;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
