<template>
  <div>
    <button @click="initialize_game()">New Game</button>
  </div>
</template>
<script>
	export default {
		methods: {
		 	initialize_game: function () {
		   		this.$store.dispatch('initialize_game')
		   		.then(() => this.$router.push('/game'))
		   		.catch(err => console.log(err))
		   	}
		}
	}
</script>