<template>
  <div class="col-md-3">
    <div class="panel panel-danger">
      <div class="panel-heading clickable">
        <h3 class="panel-title">BackLog</h3>
      </div>

      <div class="panel-body"  v-for="(backLogTask,i) in arrTaskBackLog" :key = "i">

        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">Task</h3>
          </div>
          <div class="panel-body">
            <p><strong>Assigned To</strong></p>
            <p> {{backLogTask.assignedTo}} </p>
            <hr>
            <p><strong>Task</strong></p>
            <p> {{backLogTask.taskDescription}} </p>
          </div>
          <div class="panel-footer">
            <div class="row">
              <button class="btn btn-danger" @click="deleteTask(backLogTask.id)">Delete</button>
              <button class="btn btn-success" @click="changeStatusToToDo(backLogTask.id)">To Do</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['arrTaskBackLog'],
  name: 'BackLog',
  methods: {
    changeStatusToToDo (keyTask) {
      const objUpdateTask = {
        id: keyTask,
        newStatus: `ToDo`
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
