<template>
<div>
    <div class='row'>
        <div class="col s12 m6">
            <ProjectView />
        </div>
        <div class="col s12 m5 offset-m1">
            <h5>Notifications</h5>
            <Notification />
        </div>
    </div>
</div>
</template>

<script>
import Notification from './Notification'
import ProjectView from './ProjectView'
export default {
  components: {
    Notification,
    ProjectView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
