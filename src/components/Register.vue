<template>
    <div>
        <form @submit.prevent="register">
            <h1>Register</h1>
            <label for="username">Username</label>
            <div>
                <input required id="username" type="username" v-model="username" placeholder="Username">
            </div>

            <label for="password">Password</label>
            <div>
                <input required id="password" type="password" v-model="password" placeholder="Password">
            </div>

            <label for="password-confirm">Confirm Password</label>
            <div>
                <input required id="password-confirm" type="password" v-model="password_confirmation"
                       placeholder="Confirm password">
            </div>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                password_confirmation: ""
            }
        },
        methods: {
            register: function () {
                // TODO password validation/verification
                let data = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>
