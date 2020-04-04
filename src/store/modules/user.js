/*
 * @Desc:
 * @Author: lhw
 * @Date: 2020-04-03 15:50:47
 * @LastEditTime: 2020-04-03 17:45:30
 */
const todo = [{
  id: 1,
  text: 'the last one',
  done: true
}, {
  id: 2,
  text: 'get working',
  done: true
}]

const state = {
  status: false,
  todoList: []
}

const mutations = {
  SET_STATUS: (state, status) => {
    state.status = status
  },
  SET_TODOLIST: (state, todos) => {
    state.todoList = todos
  }
}

const actions = {
  login ({ commit }, val) {
    const { status } = val
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_STATUS', status)
        resolve({ status: status })
      }, 100)
    })
  },
  todoList ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('SET_TODOLIST', todo)
        resolve({ code: 200 })
      }, 100)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
