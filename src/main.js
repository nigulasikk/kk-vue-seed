import Vue from 'vue'
import Page1 from './page1'
import Page2 from './page2'
import VueRouter from 'vue-router'
// http ajax
Vue.use(require('vue-resource'))
Vue.use(VueRouter)
var App = Vue.extend({})
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制
var router = new VueRouter()
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
router.map({
  '/page1': {
    name: 'page1',
    component: Page1
  },
  '/page2': {
    name: 'page2',
    component: Page2
  }
})
// 未匹配到就进行重定向
router.redirect({
  '*': '/page1'
})

// 路由器会创建一个 App 实例，并且挂载到选择符  匹配的元素上。
router.start(App, 'html')
