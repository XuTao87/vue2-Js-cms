import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {
  login,
  getUser,
  getMenus
} from '../api/login/index'
import {
  menuss
} from './menu/menu'
Vue.use(Vuex)
import loacl from '../utile/loacl'

import {
  mapMenusToRouter
} from '../utile/map-menus'
import {
  firstMenu
} from '../utile/map-menus'
const store = new Vuex.Store({
  state: {
    users: '',
    token: '',
    menus: '',
   
  },
  getters: {},
  mutations: {
    GetToken(state, list) {
      state.token = list
    },
    GetUser(state, list) {
      state.users = list
    },
    GetMenu(state, list) {
      state.menus = list
      const routes = mapMenusToRouter(list)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },

  },
  actions: {
    async loginUsers({
      commit
    }, playod) {
      const loginResult = await login(playod)
      const {
        id,
        token
      } = loginResult.data
      commit('GetToken', token)
      loacl.setCache('token', token)
      const userInforResult = await getUser(id)
      commit('GetUser', userInforResult.data)
      loacl.setCache('users', userInforResult.data)
      const menus = await getMenus(userInforResult.data.role.id)
      commit('GetMenu', menus.data)
      loacl.setCache('menus', menus.data)
      router.push(firstMenu.url)
    },
    loadLocalLogin({
      commit,
      dispatch
    }) {
      const token = loacl.getCache('token')
      if (token) {
        commit('GetToken', token)
      }
      const userInfo = loacl.getCache('users')
      if (userInfo) {
        commit('GetUser', userInfo)
      }
      const userMenus = loacl.getCache('menus')
      if (userMenus) {
        commit('GetMenu', userMenus)
      }
    }
  },
  modules: {
    menuss
  }
})
export function setupStore() {
  store.dispatch('loadLocalLogin')
}
export default store