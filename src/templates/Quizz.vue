<template>
  <main>
    <h1>Quizz</h1>
    <div v-for="(question, index) in currentPeriod.quizz.questions" :key="index">
      <div v-show="index === questionIndex">
        <h2>{{ question.questionText }}</h2>
        <ul>
        <li v-for="response in currentPeriod.quizz.responses" :key="response.id">
          <label>
            <input 
              type ="radio"
              v-bind:value="response.correct" 
              v-bind:name="index" 
              v-model="userResponses[index]"
            >
            {{ response.text }}
          </label>
        </li>
        </ul>
        <button v-if="questionIndex > 0" v-on:click="prev">
        prev
      </button>
      <button v-on:click="next">
        next
      </button>
      </div>
    </div>
    <div v-show="questionIndex === currentPeriod.quizz.question.length">
      <h2>Quiz finished</h2>
      <p>Total score: {{ score() }} / {{ currentPeriod.quizz.question.length }}</p>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import gsap from 'gsap';

import periods from '@/utils/periods.json'

export default {
  name: 'Quizz',
  data : function(){
    return {
      // survey : {
      //   title : "Quizz",
      //   question : [
      //     {
      //       id : 0,
      //       text : "question1",
      //       responses : [
      //         {text : "Test 1", correct : true},
      //         {text : "Test 2"}
      //       ]
      //     }
      //   ]
      // },
      questionIndex: 0,
      userResponses: Array(this.survey.question.lenght).fill(false)
    }
  },
  
  methods: {
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  },
  computed: {
    periods() {
      return periods
    },
    currentPeriod() {
      return this.periods.find(period => period.periodName === this.$route.params.type)
    }
  }
}
</script>


<style>
main{
  width:100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul,li{
  list-style: none
}
</style>