<template>
  <main >
    <div class="quizz" :style="{backgroundImage : `url(${getBackgroundPath(currentQuizz.background)})`}">
      <img :src="getPersonPath(currentQuizz.leftPerson)" alt="test"  class="left-img-person"/>
      <div class="quizzContent">
        <h2>{{ currentQuizz.questions[currentQuestion].questionText }}</h2>
        <div class="question">
          <div class="questionContent" v-for="(response, index) in currentQuizz.questions[currentQuestion].responses" :key="response.id">
            <!-- IMAGE -->
            <div :class="{'questionInput': true, 'is-wrong': isGoodAnswer === false && response.value === currentAnswer, 'is-good': isGoodAnswer && response.value === currentAnswer}">
                <label>
                  <input
                  type="radio"
                  :id="index"
                  v-bind:value="response.value"
                  v-bind:name="index"
                  v-model="currentAnswer"
                  @click="clickAnswer(response.value)"
                />
                {{ response.reponseText }}
              </label>
            </div>
          </div>
        </div>
        <div class="quizzButtons">
          <div class="counter">
            {{  currentQuestion }} / {{ currentQuizz.questions.length }}
          </div>
          <button @click="addAnswer()" v-if="nextQuestion">Question Suivante </button>
        </div>
        <router-link :to="currentQuizz.linkNextPeriode" v-if="nextStep">
          <button class="nextStep">Chapitre suivant</button>
        </router-link> 
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
      nextStep : false,
      isGoodAnswer: null,
      nextQuestion: true,
    };
  },
  methods: {
    addAnswer() {
      this.Answers.push(this.currentAnswer);
      this.currentQuestion++;
      this.currentAnswer = null;
      if(this.currentQuestion === 2){
        this.nextStep = true
        this.nextQuestion = false
      }
    },
    getPersonPath(img){
      return require(`@/assets/perso-periode/${img}.png`)
    },
    getBackgroundPath(img){
      return require(`@/assets/background/${img}.png`)
    },
    clickAnswer(clickedValue){
      this.isGoodAnswer = clickedValue === this.currentQuizz.questions[this.currentQuestion].goodAnswer
    }
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
      left : 20px;
      top: 20vh;
      height: 80vh;
      z-index:-2;
    }
    .quizzContent{
      width: 881px;
      height: 426px;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      h2{
        font-weight: 500;
        font-size: 30px;
        color: #6D6D6D;
        width: 80%;
      }
      .question{
        width: 805px;
        height: 161px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .questionContent{
          width: 248px;
          height: 75px;
          background: #AEBFD7;
          border-radius: 20px;
          .questionInput {
            background: #8F9CAF;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 20px;
            border-radius: 20px;
            transition: border 0.3s ease-in;
            input[type="radio"] {
              display: none;
              
            }
          }
        }
      }
      .quizzButtons{
        width: 800px;
        height: 56px;
        display: flex;
        justify-content: space-between;
        .counter{
          background: #8F9CAF;
          color: white;
          border-radius: 10px;
          line-height: 54px;
          width: 100px;
          text-align: center;
          font-size: 20px;
        }
        button{
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
  .nextStep{
    position: absolute;
    top: 15px;
    right: 15px;
    width: 296px;
    height: 57px;
    background: #8F9CAF;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 20px;
    border: none;
  }

  .is-wrong {
    border: solid 2px red;
  }
  .is-good {
    border: solid 2px green;
  }
}
</style>