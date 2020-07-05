<template>
  <main >
    <div class="quizz" :style="{backgroundImage : `url(${getImagePath(currentQuizz.background)})`}">
      <img :src="getImagePath(currentQuizz.leftPerson)" alt="test"  class="left-img-person"/>
      <div class="quizz--content">
        <h2>{{ currentQuizz.questions[currentQuestion].questionText }}</h2>
        <div class="question">
          <div class="question--content" v-for="(response, index) in currentQuizz.questions[currentQuestion].responses" :key="response.id">
            <!-- IMAGE -->
            <div class="question--input">
                <label>
                  <input
                  type="radio"
                  :id="index"
                  v-bind:value="response.value"
                  v-bind:name="index"
                  v-model="currentAnswer"
                />
                {{ response.reponseText }}
              </label>
            </div>
          </div>
        </div>
        <div class="quizz--buttons">
          <button @click="$router.go(-1)">Retournez au chapitre</button>
          <button @click="addAnswer()">Question Suivante {{  currentQuestion }} / {{ currentQuizz.questions.length }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import gsap from 'gsap';
import quizz from '@/utils/quizz.json';
export default {
  name: 'Quizz',
  data() {
    return {
      currentQuestion: 0,
      Answers: [],
      currentAnswer: null,
    };
  },
  methods: {
    addAnswer() {
      this.Answers.push(this.currentAnswer);
      this.currentQuestion++;
      this.currentAnswer = null;
    },
    // removeAnswer() {
    //   this.Answers.pop();
    //   this.currentQuestion--;
    //   this.currentAnswer = null;
    // },
    getImagePath(imgName) {
      return require(`@/assets/images/${imgName}.png`);
    },
  },
  computed: {
    currentQuizz() {
      return quizz[this.$route.params.period];
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  .quizz{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-img-person{
      position: absolute;
      left : -10px;
      z-index:-2
    }
    .quizz--content{
      width: 881px;
      height: 426px;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      h2{
        font-weight: 500;
        font-size: 30px;
        color: #6D6D6D;
      }
      .question{
        width: 805px;
        height: 161px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .question--content{
          width: 248px;
          height: 145px;
          background: #AEBFD7;
          border-radius: 10px;
          .question--input {
            background: #8F9CAF;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 20px;
            font-size: 16px;
          }
        }
      }
      .quizz--buttons{
        width: 800px;
        height: 56px;
        display: flex;
        justify-content: space-between;
        button:nth-child(1){
          width: 296px;
          height: 57px;
          background: #4F5A67;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          color: white;
          font-weight: 500;
          font-size: 20px;
          border: none;
        }
        button:nth-child(2){
          width: 296px;
          height: 57px;
          background: #8F9CAF;
          border-radius: 10px;
          color: white;
          font-weight: 500;
          font-size: 20px;
          border: none;
        }
      }
    }
  }
}
</style>