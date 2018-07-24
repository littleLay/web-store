import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components: {
        default : GoodsList,
        title : Title,
        img : Image
      }
      // children: [
      //   {
      //     path: 'title',
      //     name: 'title',
      //     component: Title
      //   },
      //   {
      //     path: 'img',
      //     name: 'img',
      //     component: Image
      //   }
      // ]
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
