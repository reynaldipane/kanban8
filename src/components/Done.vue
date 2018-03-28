<template>
  <div class="col-md-3">
    <div class="panel panel-success">
      <div class="panel-heading clickable">
        <h3 class="panel-title">Done</h3>
      </div>

      <div class="panel-body" v-for="(doneTask,i) in arrTaskDone" :key="i">

        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Task</h3>
          </div>
          <div class="panel-body">
            <p><strong>Assigned To</strong></p>
            <p> {{doneTask.assignedTo}} </p>
            <hr>
            <p><strong>Task</strong></p>
            <p> {{doneTask.taskDescription}} </p>
          </div>
          <div class="panel-footer">
            <div class="row">
              <button class="btn btn-success" @click="changeStatusToDoing(doneTask.id)">Doing</button>
              <button class="btn btn-danger" @click="deleteTask(doneTask.id)">Delete</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['arrTaskDone'],
  name: 'Done',
  methods: {
    changeStatusToDoing (keyTask) {
      const objUpdateTask = {
        id: keyTask,
        newStatus: `Doing`
      }
      this.$store.dispatch('updateTask', objUpdateTask)
        .then(() => { alert('Task moved !') })
    },
    deleteTask (keyTask) {
      this.$store.dispatch('deleteTask', keyTask)
        .then(() => {
          alert('Task Deleted !')
        })
    }
  }
}
</script>

<style>

</style>
