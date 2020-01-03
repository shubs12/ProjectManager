<template>
<div>
    <div class='project-list section' >
                <div class='card z-depth-0 summary' :key='project.title' v-for="project in allProject">
                    <div class='card-content grey-text text-darken-3'>
                        <span class='card-title'>Project Name - {{ project.title }}</span>
                        <p>Posted by {{project.author}}</p>
                        <p className="grey-text">3rd september , 3 AM</p>
                        <button @click="onSubmit (project)"   class="btn green ligten-2 z-depth-0" >View Project</button>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  props: ['projects'],
  methods: {
    ...mapActions(['fetchPro']),
    onSubmit: function (project) {
      this.fetchPro(project)
      router.push('./project')
    }
  },
  computed: {
    ...mapGetters(['allProject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
