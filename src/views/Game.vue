<template>
    <div class="home">
        <Game/>
        <NewGameButton/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Game from '@/components/Game.vue'
    import NewGameButton from '@/components/NewGameButton.vue'

    export default {
        name: 'game',
        components: {
            Game,
            NewGameButton
        },
    }
</script>
