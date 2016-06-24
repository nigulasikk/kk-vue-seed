<template>
<h1>这是page1</h1>
  <button v-link="{path: 'page2'}">通过vue-router跳转到page2</button>
  <h2>1.vue-table demo</h2>
  <tabledemo></tabledemo>
  <h2>2.vue-resource加载本地json数据,(ajax)</h2>
  <button @click='getJson'>获取datas.json数据</button>
  <br>
  datas.json：{{callbackInfo}}
</template>

<script>
import Tabledemo from './components/table'

export default {
  data () {
    return {
      callbackInfo: ''
    }
  },
  components: {
    Tabledemo
  },
  methods: {
    getJson: function () {
      this.$http({url: '/static/datas.json', method: 'GET', emulateJSON: true}).then(function (response) {
        this.callbackInfo = response.data
      })
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

</style>
