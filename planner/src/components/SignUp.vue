<template>
    <div>
        <div class='container'>
                <form  class='white' v-on:submit="onSubmit">
                <div>
                    <h4 class='grey-text text-darken-3'>Sign In</h4>

                    <div class='input-field'>
                        <label htmlFor='First Name'>First Name</label>
                        <input type='text' v-model="fname" required>
                    </div>

                    <div class='input-field'>
                        <label htmlFor='Last Name'>Last Name</label>
                        <input type='text' v-model="lname" >
                    </div>

                    <div class='input-field'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='text' v-model="email" required>
                    </div>

                    <div class='input-field'>
                        <label htmlFor='password'>password</label>
                        <input type='password' v-model="password" required>
                    </div>

                    <div class='input-field'>
                        <button type="submit" class='btn green ligten-2 z-depth-0' @click="1">SignUp</button>
                    </div>
                </div>
            </form>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '../router'

export default {
  data () {
    return {
      email: '',
      fname: '',
      lname: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['addSignups']),
    onSubmit (e) {
      e.preventDefault()
      const signup = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.password
      }
      this.addSignups(signup)
      router.push('./login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
