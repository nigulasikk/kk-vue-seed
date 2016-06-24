<template>
<h1>这是page2</h1>
  <button v-link="{path: 'page1'}">返回page1</button>

</template>

<script>
import Tabledemo from './components/table'

export default {
  components: {
    Tabledemo
  }
}
</script>

<style>

</style>
