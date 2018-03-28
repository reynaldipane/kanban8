<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <button class="btn btn-success pull-left" @click="toggleFormAddTask">Add New Task</button>
        </div>
        <br>
      </div>
      <br>
      <app-formaddtask v-if="formAddTaskActive"></app-formaddtask>
      <div class="container">
        <div class="row">
          <app-backlog :arrTaskBackLog="arrBackLog"></app-backlog>
          <app-todo :arrTaskToDo="arrToDo"></app-todo>
          <app-doing :arrTaskDoing="arrDoing"></app-doing>
          <app-done :arrTaskDone="arrDone"></app-done>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog'
import ToDo from '@/components/ToDo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
import FormAddTask from '@/components/FormAddTask'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data: function () {
    return {
      formAddTaskActive: ``
    }
  },
  methods: {
    showFormAddTask: function () {
      this.formAddTaskActive = true
    },
    hideFormAddTask: function () {
      this.formAddTaskActive = false
    },
    toggleFormAddTask: function () {
      if (this.formAddTaskActive) {
        this.formAddTaskActive = false
      } else {
        this.formAddTaskActive = true
      }
    }
  },
  components: {
    'app-backlog': BackLog,
    'app-todo': ToDo,
    'app-doing': Doing,
    'app-done': Done,
    'app-formaddtask': FormAddTask
  },
  computed: {
    ...mapGetters({
      arrBackLog: 'getArrBackLog',
      arrToDo: 'getArrToDo',
      arrDoing: 'getArrDoing',
      arrDone: 'getArrDone'
    })
  },
  created: function () {
    this.formAddTaskActive = false
    this.$store.dispatch('getAllTask')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
