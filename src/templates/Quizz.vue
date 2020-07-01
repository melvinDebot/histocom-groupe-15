<template>
  <div class="quizz">
    <div class="quizz-title">
      Des Questions sur lA Préhistoire
    </div>
    <div class="survey">
      <div v-for="(question, index) in quizz.currentDataQuizz.question" :key="question.id">
        <div v-show="index == questionIndex">
          <h2>{{ question.currentDataQuizz.text }}</h2>
          <ul>
            <li v-for="response in question.responses" :key="response.id">
              <label>
                <input 
                  type ="radio"
                  v-bind:value="response.correct" 
                  v-bind:name="index" 
                  v-model="userResponses[index]"
                />
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
      <div v-show="questionIndex == quizz.question.length">
      <h2>Quiz finished</h2>
      <p>Total score: {{ score() }} / {{ quizz.question.length }}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Quizz',
  data : ()=> {
    return {
      quizz : {
        'histoire-quizz': {
          question : [
            {
              id : 0,
              text : "Pour quel outil de communication des pétale de fleurs étaient écrasé ?",
              responses : [
                { text : "la peinture", correct : true},
                { text : "la sculture"},
                { text : "la parole"}
              ]
            },
            {
              id : 1,
              text : "Pour quel outil ?",
              responses : [
                { text : "la peinture"},
                { text : "la sculture", correct : true},
                { text : "la parole"}
              ]
            },
          ]
        },
        "ere-romaine": {
          question : [
            {
              id : 0,
              text : "Pour quel outil de communication des pétal",
              responses : [
                { text : "la peinture", correct : true},
                { text : "la sculture"},
                { text : "la parole"}
              ]
            },
            {
              id : 1,
              text : "Pour quel outil ?",
              responses : [
                { text : "la peinture"},
                { text : "la sculture", correct : true},
                { text : "la parole"}
              ]
            },
          ]
        },
      },
      questionIndex: 0,
      userResponses: Array(this.quizz.question.lenght).fill(false)
    }
  },
  methods : {
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
  computed : {
    currentDataQuizz(){
      return this.quizz[this.$route.params.type]
    }
  }
}
</script>

<style lang="scss" scoped>
  .quizz{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    .quizz-title{
      width: 881px;
      height: 161px;
      background: #FFFFFF;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      text-align: center;
      line-height: 161px;
      font-weight: 500;
      font-size: 38px;
    }
    .survey{
      width: 881px;
      height: 487px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

    }
  }
</style>


