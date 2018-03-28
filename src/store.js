import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrBackLog: [],
    arrToDo: [],
    arrDoing: [],
    arrDone: []
  },
  getters: {
    getArrBackLog: state => {
      return state.arrBackLog
    },
    getArrToDo: state => {
      return state.arrToDo
    },
    getArrDoing: state => {
      return state.arrDoing
    },
    getArrDone: state => {
      return state.arrDone
    }
  },
  mutations: {
    setTaskByStatus: function (state, payload) {
      state.arrBackLog = payload.filter(task => { return task.status === 'BackLog' })
      state.arrToDo = payload.filter(task => { return task.status === 'ToDo' })
      state.arrDoing = payload.filter(task => { return task.status === 'Doing' })
      state.arrDone = payload.filter(task => { return task.status === 'Done' })
    }
  },
  actions: {
    addNewTask (context, payload) {
      const key = firebase.database().ref('task').push().key
      firebase.database().ref('task').child(key).update(payload)
    },
    getAllTask (context) {
      firebase.database().ref('task').on('value', snapshot => {
        let arrOfAllTask = []
        snapshot.forEach(task => {
          let objTask = {}
          objTask.id = task.key
          objTask.assignedTo = task.val().assignedTo
          objTask.taskDescription = task.val().taskDescription
          objTask.status = task.val().status
          arrOfAllTask.push(objTask)
        })
        context.commit('setTaskByStatus', arrOfAllTask)
      })
    },
    updateTask (context, payload) {
      firebase.database().ref('task').child(payload.id).update({status: payload.newStatus})
    },
    deleteTask (context, payload) {
      firebase.database().ref('task').child(payload).remove()
    }
  }
})

export default store
