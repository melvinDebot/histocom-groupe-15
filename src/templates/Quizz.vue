<template>
  <main>
    <h1>Quizz</h1>
    <div>
      <h2>{{ currentQuizz.questions[currentQuestion].questionText }}</h2>
      <ul>
        <li v-for="(response, index) in currentQuizz.questions[currentQuestion].responses" :key="response.id">
          <label>
            <input
              type="radio"
              :id="index"
              v-bind:value="response.value"
              v-bind:name="index"
              v-model="currentAnswer"
            />
            {{ response.text }}
          </label>
        </li>
      </ul>
      <button v-if="currentQuestion > 0" @click="removeAnswer()">prev</button>
      <button @click="addAnswer()">next</button>
    </div>

    <!-- <div v-show="questionIndex === currentQuizz.question.length">

      <h2>Quiz finished</h2>
      <p>Total score: {{ score() }} / {{ currentQuizz.question.length }}</p>
    </div>-->
    <!-- <router-link :to="{path : currentQuizz.linkNextPeriode }"><button>Periode Suivante</button></router-link> -->
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
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
    next() {
      this.questionIndex++;
    },
    prev() {
      this.questionIndex--;
    },
    score() {
      return this.userResponses.filter((val) => val).length;
    },
    addAnswer() {
      this.Answers.push(this.currentAnswer);
      this.currentQuestion++;
      this.currentAnswer = null;
    },
    removeAnswer() {
      this.Answers.pop();
      this.currentQuestion--;
      this.currentAnswer = null;
    },
  },
  computed: {
    currentQuizz() {
      return quizz[this.$route.params.period];
    },
  },
};
</script>

<style>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul,
li {
  list-style: none;
}
</style>
