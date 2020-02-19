import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/Head'
import Registration from '@/components/Registration'
import Login from '@/components/Login'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Registration',
      component: Registration
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
