<template>
  <div id="app">
    <p>当前状态:{{status}}</p>
    <button class="btn" @click="changeStatus">{{btnName}}</button>
    <div class="todo" v-if="btnName == 'logout'">
      <div class="todo-item" v-for="(item, key) in doneTodos" :key="key">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const btnNames = ['logout', 'login']
export default {
  data () {
    return {
      status: false,
      btnName: 'login',
      btnNames
    }
  },
  computed: {
    ...mapGetters(['doneTodos'])
  },
  methods: {
    changeStatus () {
      const originStatus = this.status
      var key = originStatus ? 1 : 0
      this.$store.dispatch('user/login', { status: !originStatus }).then((response) => {
        this.btnName = this.btnNames[key]
        this.status = response.status
        if (!originStatus) {
          this.$store.dispatch('user/todoList').then((response) => {
            if (response.code === 200) {
              alert('request success')
            }
            if (this.doneTodos.length === 0) {
              alert('nothing to do')
            }
          })
        } else {
          alert('logout success')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .btn
    border 1px solid green
  .todo
    margin-top 50px
    .todo-item
      margin-top 5px
</style>
