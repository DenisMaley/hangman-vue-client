<template>
  <div>
    <h1>Game</h1>
    <div class="disguisedWord">
      {{current_game.disguised_word}}
    </div>
    <div>
      <div @click="makeMove(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)" v-for="letter in possibleSymbols0">
        {{letter}}
      </div>
    </div>
    <div>
      <div @click="makeMove(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)" v-for="letter in possibleSymbols1">
        {{letter}}
      </div>
    </div>
    <div>
      <div @click="makeMove(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)" v-for="letter in possibleSymbols2">
        {{letter}}
      </div>
    </div>
    <div>
      <div @click="makeMove(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)" v-for="letter in possibleSymbols3">
        {{letter}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        current_game: this.$store.getters.currentGame,
        possibleSymbols0: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        possibleSymbols1: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        possibleSymbols2: ["J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"],
        possibleSymbols3: ["T", "U", "V", "W", "X", "Y", "Z"],
      }
    },
    methods: {
      makeMove(letter) {
        console.log(letter)
        return
      },
      getStrikethroughClass(letter) {
        if (this.current_game.named_letters.includes(letter)) {
          return 'diagonal-strike'
        }
        return null
      }
    }
  }
</script>

<style>
.disguisedWord {
  font-size: 30px;
}
.possibleSymbol {
  display: inline-block;
  margin: 10px 3px 0px 3px;
  font-size: 30px;
  min-width: 30px;
  cursor: pointer;
}
</style>
