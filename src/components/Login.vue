<template>
    <div>
        <form @submit.prevent="login">
            <h1>Log in</h1>
            <label for="username">Username</label>
            <div>
                <input required id="username" type="username" v-model="username" placeholder="Username">
            </div>

            <label for="password">Password</label>
            <div>
                <input required id="password" type="password" v-model="password" placeholder="Password">
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login: function () {
                let data = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch('login', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>
