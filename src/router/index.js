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
import man from "../components/man.vue"
import makeup from "../components/makeup.vue"
import house from "../components/house.vue"
import child from "../components/child"

export default new Router({
  routes: [
    {
      path: '/man',
      component: man
    },
    {
      path: '/makeup',
      component: makeup
    },
    {
      path: '/house',
      component: house
    },
    {
      path: '/child',
      component: child
    },
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
    },
    {
        path:"*",
        redirect:"/index",
        // component:404Component
    }

  ]
})
