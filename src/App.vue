<!--
 * @Author: hongdong.liao
 * @Date: 2021-05-13 18:06:04
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 19:09:49
 * @FilePath: /microDemo/demo-web/demo-web-order/src/App.vue
-->
<template>
  <div id="app-system">
    <div id="nav">
      order 应用
      <input v-model="data" />
      <div @click="sendMessage">点击发送消息</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { setState } from '@/utils/app-store'

export default {
  data () {
    return {
      data: 'order 的默认消息'
    }
  },
  methods: {
    sendMessage () {
      setState({
        message: this.data
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
