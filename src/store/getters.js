/*
 * @Desc:
 * @Author: lhw
 * @Date: 2020-04-03 15:46:52
 * @LastEditTime: 2020-04-03 17:24:45
 */
const getters = {
  status: state => state.user.status,
  doneTodos: state => {
    return state.user.todoList.filter(todo => todo.done)
  }
}

export default getters
