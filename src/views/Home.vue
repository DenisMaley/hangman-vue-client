<template>
    <div class="home">
        <img src="../assets/logo.png">
        <NewGameButton v-if="isLoggedIn"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import NewGameButton from '@/components/NewGameButton.vue'

    export default {
        name: 'home',
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            }
        },
        components: {
            NewGameButton
        }
    }
</script>
