<template>
    <div>
        <button @click="initialize_game()">New Game</button>
    </div>
</template>
<script>
    export default {
        methods: {
            initialize_game: function () {
                const path = '/game';
                if (this.$route.path === path) {
                    this.$router.go()
                } else {
                    this.$router.push(path)
                }
            }
        }
    }
</script>
