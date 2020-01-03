<template>
    <div>
        <div class='container'>
                <form  class='white' v-on:submit="onSubmit">
                <div>
                    <h4 class='grey-text text-darken-3'>Login</h4>

                    <div class='input-field'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='text' v-model="email" required>
                    </div>

                    <div class='input-field'>
                        <label htmlFor='password'>password</label>
                        <input type='password' v-model="password" required>
                    </div>

                    <div class='input-field'>
                        <button type="submit" class='btn green ligten-2 z-depth-0'>Login</button>
                    </div>
                </div>
            </form>
          </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login']),
    onSubmit (e) {
      e.preventDefault()
      const login = {
        email: this.email,
        password: this.password
      }
      this.login(login)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
