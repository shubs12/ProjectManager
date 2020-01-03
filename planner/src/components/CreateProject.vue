<template>
    <div>
        <div class='container'>
                <form  class='white' @submit="onSubmit">
                <div>
                    <h4 class='grey-text text-darken-3'>Create A New Project </h4>

                    <div class='input-field'>
                        <label htmlFor='Title'>Title</label>
                        <input type='text' v-model="title" required>
                    </div>

                    <div class='input-field'>
                        <label htmlFor='Project Content'> Project Content</label>
                        <textarea type='text' rows="5" cols="40" style="width:100%;height:150px;margin-top:1%" v-model="content" required></textarea>
                    </div>

                    <div class='input-field'>
                        <button type="submit" class='btn green ligten-2 z-depth-0'>Create</button>
                    </div>
                </div>
            </form>
            </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../router'

export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['addProject']),
    onSubmit (e) {
      e.preventDefault()
      if (typeof this.user[0] !== 'undefined') {
        const project = {
          title: this.title,
          content: this.content,
          author: this.user[0].fname
        }
        this.addProject(project)
      } else {
        alert('Please Login')
      }
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
