import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SingleCategory from './views/Category/single.vue';
import Post from './views/Post/single.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/category/:id',
      name: 'single-category',
      component: SingleCategory,
      props: true
    },

    {
      path: '/post/:id',
      name: 'single-post',
      component: Post,
      props: true
    }
  ]
})
