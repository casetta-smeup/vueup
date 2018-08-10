import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    user: null,
    webup: {
      comp: null
    },
    componentMap: {}
  },

  mutations: {
    addComponentToMap(state, payload) {
      state.componentMap[payload.id] = payload.comp;
    },

    removeComponentFromMap(state, id) {
      delete state.componentMap[id];
    },

    setLoading(state, loading) {
      state.loading = loading;
    },

    setUser(state, user) {
      state.user = user;
    },

    setWebupComp(state, comp) {
      state.webup.comp = comp;
    }
  },

  actions: {
    getComp(store, fun) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("fun", fun);

      store.commit("setLoading", true);

      return axios.post("/comp/get", urlSearchParams.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    },

    login: function({ commit }, payload) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("env", payload.env);
      urlSearchParams.append("user", payload.user);
      urlSearchParams.append("pwd", payload.pwd);

      commit("setLoading", true);

      return axios.post("/auth/login", urlSearchParams.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    }
  },

  getters: {
    getComponentById: state => id => {
      return state.componentMap[id];
    }
  }
});
