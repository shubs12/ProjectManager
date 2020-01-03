<template>
<div>
    <div class='project-list section' >
                <div class='card z-depth-0 summary' :key="viewProject.title" v-for="viewProject in viewPro">
                    <div class='card-content grey-text text-darken-3'>
                        <span class='card-title'>Project Name - {{viewProject.title}}</span>
                        <p>Posted by {{ viewProject.author}}</p>
                        <p className="grey-text">3rd september , 3 AM</p>
                        <div>{{viewProject.content}}</div>
                        <router-link to='./'><button>Go to all projects</button></router-link>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['viewProject'],
  computed: {
    ...mapGetters(['viewPro'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
