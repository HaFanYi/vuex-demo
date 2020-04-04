/*
 * @Desc:
 * @Author: lhw
 * @Date: 2020-04-03 09:12:31
 * @LastEditTime: 2020-04-04 18:29:50
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})
export default store

// const todo = [{
//   id: 1,
//   text: 'the last one',
//   done: true
// }, {
//   id: 2,
//   text: 'get working',
//   done: false
// }]

// export default new Vuex.Store({
//   state: {
//     status: false,
//     todoList: []
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todoList.filter(todo => todo.done)
//     }
//   },
//   mutations: {
//     changeStatus (state, val) {
//       state.status = val
//     },
//     setTodoList (state, val) {
//       state.todoList = val
//     }
//   },
//   actions: {
//     changeStatus (context, val) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           context.commit('changeStatus', val)
//           resolve()
//         }, 1000)
//       })
//     },
//     setTodoList (context) {
//       setTimeout(() => {
//         context.commit('setTodoList', todo)
//       }, 1000)
//     }
//   },
//   modules: {}
// })
