import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    musics: [],
    music: {}
  },
  getters: {},
  mutations: {
    GET_MUSICS(state, musics) {
      state.musics = musics
    },
    GET_MUSIC(state, music) {
      state.music = music;
    }
  },
  actions: {
    async getMusics({commit}, musics) {
      commit('GET_MUSICS', musics)
    },
    getMusic({commit}, music) {
      commit('GET_MUSIC', music);
    }
  }
})