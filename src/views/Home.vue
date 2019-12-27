<template>
  <div class="home">
    <img src="../assets/logo.png">
    <NewGameButton msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewGameButton from '@/components/NewGameButton.vue'

export default {
  name: 'home',
  components: {
    NewGameButton
  }
}
</script>
