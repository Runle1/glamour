import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from "../components/index.vue"
import login from "../components/login.vue"
import crossborder from "../components/crossborder.vue"
import shoppingcart from "../components/shoppingcart.vue"
import woman from "../components/woman.vue"
import detail from "../components/detail.vue"
import productdetail from "../components/productdetail.vue"

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
    {
    	path: '/login',
    	component: login
    },
    {
    	path: '/crossborder',
    	component: crossborder
    },
    {
    	path: '/shoppingcart',
    	component: shoppingcart
    },
    {
        path: "/woman",
        component: woman
    },
    {
      path:"/detail/:detailid",
      component:detail
    },
    {
      path:"/productdetail/:productdetailid",
      component: productdetail
    }

  ]
})
