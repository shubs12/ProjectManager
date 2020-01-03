<template>
<nav class="nav-wrapper grey darken-3">
            <div class=" container">
              <router-link to="/">
                          <a class="brand-logo left" > Planner </a>
                </router-link>
                <ul class="right" v-if="logIn === false">
                  <li><router-link to = "/login">Login</router-link></li>
                  <li><router-link to = "/signup">Signup</router-link></li>
                  <li ><a class='btn btn-floating pink lighten-1'>SJ</a></li>
                </ul>
                <ul class="right" v-if="logIn === true">
                  <li><router-link to = "/create">Create Project</router-link></li>
                  <li @click="onSubmit">Logout</li>
                  <li ><a class='btn btn-floating pink lighten-1'>SJ</a></li>
                </ul>
            </div>
        </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  methods: {
    ...mapActions(['logout']),
    onSubmit (e) {
      e.preventDefault()
      this.logout()
      router.push('./')
    }
  },
  computed: {
    ...mapGetters(['logIn'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
