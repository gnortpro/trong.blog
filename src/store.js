import Vue from 'vue';
import Vuex from 'vuex';
import PostService from '@/services/PostService.js';
import CategoryService from '@/services/CategoryService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    links: [],
    category: [],
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'About',
        href: '#about'
      }
    ],
    posts: [],
    postDetail: []
  },
  getters: {
    getCategoryByIds: state => id => {
      return state.links.find(category => category.term_id === id)
    }
    // getCategoryByIds(state, id) {
    //   if (state.links.term_id)
    // }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    SET_POST: (state, payload) => (state.articles = payload),
    // get category ở đây luôn
    SET_LINK: (state, payload) => (state.links = payload),
    SET_CATEGORY_BY_ID: (state, payload) => (state.category = payload),
    SET_POST_BY_ID: (state, payload) => (state.postDetail = payload)
  },
  actions: {
    fetchPosts ({ commit }) {
      PostService.getPost()
        .then(response => {
          commit('SET_POST', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchPostById ({ commit }, id) {
      PostService.getPostDetails(id)
        .then(response => {
          commit('SET_POST_BY_ID', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchLinkMenu ({ commit }) {
      CategoryService.getCategory()
        .then(response => {
          commit('SET_LINK', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchCategoryById ({ commit }, id) {
      CategoryService.getCategoryDetails(id)
        .then(response => {
          commit('SET_CATEGORY_BY_ID', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
})
