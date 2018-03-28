<template>
  <div class="col-md-3">
    <div class="panel panel-warning">
      <div class="panel-heading clickable">
        <h3 class="panel-title">To Do</h3>
      </div>

      <div class="panel-body" v-for="(toDoTask,i) in arrTaskToDo" :key="i">

        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">Task</h3>
          </div>
          <div class="panel-body">
            <p><strong>Assigned To</strong></p>
            <p>{{toDoTask.assignedTo}}</p>
            <hr>
            <p><strong>Task</strong></p>
            <p>{{toDoTask.taskDescription}}</p>
          </div>
          <div class="panel-footer">
            <div class="row">
              <button class="btn btn-warning" @click="changeStatusToBackLog(toDoTask.id)">Backlog</button>
              <button class="btn btn-danger" @click="deleteTask(toDoTask.id)">Delete</button>
              <button class="btn btn-success" @click="changeStatusToDoing(toDoTask.id)">Doing</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['arrTaskToDo'],
  name: 'ToDo',
  methods: {
    changeStatusToBackLog (keyTask) {
      const objUpdateTask = {
        id: keyTask,
        newStatus: `BackLog`
      }
      this.$store.dispatch('updateTask', objUpdateTask)
        .then(() => { alert('Task moved !') })
    },
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
