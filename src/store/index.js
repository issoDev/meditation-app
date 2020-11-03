import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    musics: []
  },
  getters: {},
  mutations: {
    GET_MUSICS(state, musics) {
      state.musics = musics
    }
  },
  actions: {
    async getMusics({commit}, musics) {
      commit('GET_MUSICS', musics)
    }
  }
})