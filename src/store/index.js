import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    musics: [],
    music: null
  },
  getters: {},
  mutations: {
    GET_MUSICS(state, musics) {
      state.musics = musics
    },
    GET_MUSIC(state, id) {
      state.musics.find(music => {
        if (music.id === id) {
          return state.music = music;
        }
      })
    }
  },
  actions: {
    async getMusics({commit}, musics) {
      commit('GET_MUSICS', musics)
    },
    getMusic({commit}, id) {
      commit('GET_MUSIC', id);
    }
  }
})