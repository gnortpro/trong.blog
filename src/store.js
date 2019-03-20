import Vue from 'vue'
import Vuex from 'vuex'
import PostService from '@/services/PostService.js'
import CategoryService from '@/services/CategoryService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    links: [],
    drawer: false,
    items: [{
        text: 'Home',
        to: '/'
      },
      {
        text: 'About',
        href: '#about'
      }
    ],
    posts: []
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) {
          continue
        }

        const text = article.category

        categories.push({
          text,
          to: `/category/${text}`
        })
      }

      return categories.sort().slice(0, 4)
    }

  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    SET_POST: (state, payload) => (state.articles = payload),
    SET_LINK: (state, payload) => (state.links = payload)
  },
  actions: {
    fetchPosts ({
      commit
    }) {
      PostService.getPost()
        .then(response => {
          commit('SET_POST', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchLinkMenu ({
      commit
    }) {
      CategoryService.getCategory()
        .then(response => {
          commit('SET_LINK', response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
})
