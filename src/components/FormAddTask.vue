<template>
  <div class="col-md-8 col-md-offset-2">
    <div class="box box-warning">
      <div class="box-body">
        <div class="form-group col-md-8 col-md-offset-2">
          <label>Assigned To</label>
          <input type="text" class="form-control" placeholder="Assign this task for..." v-model="objNewTask.assignedTo">
        </div>
        <div class="form-group col-md-8 col-md-offset-2">
          <label>Task Description</label>
          <input type="text" class="form-control" placeholder="A simple descriptive task..." v-model="objNewTask.taskDescription">
        </div>
        <div class="form-group col-md-8 col-md-offset-2">
          <button type="submit" class="btn btn-warning" @click="addNewTask">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddTask',
  data: function () {
    return {
      objNewTask: {
        assignedTo: ``,
        taskDescription: ``,
        status: `BackLog`
      }
    }
  },
  methods: {
    addNewTask: function () {
      this.$store.dispatch('addNewTask', this.objNewTask)
        .then(() => {
          alert('Task added')
        })
    }
  }
}
</script>

<style>

</style>
