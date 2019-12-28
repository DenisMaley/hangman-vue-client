<template>
    <div>
        <h1>Game</h1>
        <div>
            Lives: {{current_game.lives}}
        </div>
        <div v-if="isSuccess">
            <div class="disguisedWord"> You won! Your score: {{current_game.score}} %</div>
            <img src="../assets/success.gif">
        </div>
        <div v-if="isFailure">
            <div class="disguisedWord"> You failed! Your score: {{current_game.score}} %</div>
            <img src="../assets/failure.gif">
        </div>
        <div class="disguisedWord">
            {{current_game.disguised_word}}
        </div>
        <div>
            <div @click="makeTurn(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)"
                 v-for="letter in possibleSymbols0">
                {{letter}}
            </div>
        </div>
        <div>
            <div @click="makeTurn(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)"
                 v-for="letter in possibleSymbols1">
                {{letter}}
            </div>
        </div>
        <div>
            <div @click="makeTurn(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)"
                 v-for="letter in possibleSymbols2">
                {{letter}}
            </div>
        </div>
        <div>
            <div @click="makeTurn(letter)" class="possibleSymbol" :class="getStrikethroughClass(letter)"
                 v-for="letter in possibleSymbols3">
                {{letter}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                current_game: {},
                possibleSymbols0: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                possibleSymbols1: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
                possibleSymbols2: ["J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"],
                possibleSymbols3: ["T", "U", "V", "W", "X", "Y", "Z"],
            }
        },
        created() {
            axios({url: 'http://localhost:5000/api/games', method: 'POST'})
                .then(response => (this.current_game = response.data))
                .catch(err => console.log(err))
        },
        computed: {
            isSuccess() {
                return this.current_game.state === 'SUCCEEDED'
            },
            isFailure() {
                return this.current_game.state === 'FAILED'
            }
        },
        methods: {
            makeTurn(letter) {
                if (this.current_game.named_letters.includes(letter)) {
                    return
                }
                let turn = {
                    letter: letter,
                };
                axios({
                    url: 'http://localhost:5000/api/game/' + this.current_game.id + '/turn',
                    data: turn,
                    method: 'POST'
                })
                    .then(response => {
                        this.current_game = response.data
                    })
                    .catch(err => console.log(err))
            },
            getStrikethroughClass(letter) {
                let named_letters = this.current_game.named_letters;
                if (named_letters && named_letters.includes(letter)) {
                    return 'diagonal-strike'
                }
                return null
            }
        }
    }
</script>

<style>
    .disguisedWord {
        font-size: 50px;
    }

    .diagonal-strike {
        background: linear-gradient(to left top, transparent 47.75%, currentColor 49.5%, currentColor 50.5%, transparent 52.25%);
        color: dimgrey;
    }

    .possibleSymbol {
        display: inline-block;
        margin: 10px 3px 0px 3px;
        font-size: 30px;
        min-width: 30px;
        cursor: pointer;
    }
</style>
