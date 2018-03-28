<template>
  <div class="col-md-3">
    <div class="panel panel-primary">
      <div class="panel-heading clickable">
        <h3 class="panel-title">Doing</h3>
      </div>

      <div class="panel-body" v-for="(doingTask,i) in arrTaskDoing" :key = "i">

        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Task</h3>
          </div>
          <div class="panel-body">
            <p><strong>Assigned To</strong></p>
            <p> {{doingTask.assignedTo}} </p>
            <hr>
            <p><strong>Task</strong></p>
            <p> {{doingTask.taskDescription}} </p>
          </div>
          <div class="panel-footer">
            <div class="row">
              <button class="btn btn-warning" @click="changeStatusToToDo(doingTask.id)">To Do</button>
              <button class="btn btn-danger" @click="deleteTask(doingTask.id)">Delete</button>
              <button class="btn btn-success" @click="changeStatusToDone(doingTask.id)">Done</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['arrTaskDoing'],
  name: 'Doing',
  methods: {
    changeStatusToToDo (keyTask) {
      const objUpdateTask = {
        id: keyTask,
        newStatus: `ToDo`
      }
      this.$store.dispatch('updateTask', objUpdateTask)
        .then(() => { alert('Task moved !') })
    },
    changeStatusToDone (keyTask) {
      const objUpdateTask = {
        id: keyTask,
        newStatus: `Done`
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
