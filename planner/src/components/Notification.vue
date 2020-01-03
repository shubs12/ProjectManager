<template>
    <div>
        <div>
            <div class='card z-depth-0' :key='project.title' v-for="project in allProject">
                <div class='card-content left' >
                <span class='card-action gret red-text'>{{ project.author }}</span>
                <br>
                    <span class='card-content'>Created a new project</span>
                    <span class='card-action gret lightn-4 grey-text'> 1 hr ago </span>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['projects'],
  methods: {
    ...mapActions(['fetchProject'])
  },
  computed: {
    ...mapGetters(['allProject'])
  }
}
</script>

<style scoped>

</style>
