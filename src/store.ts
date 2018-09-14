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

    replaceComp(state, newData) {
      state.webup.comp.comps[1].comps[0].comps = [newData.comp];
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

    login: function ({ commit }, payload) {
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
    },

    execDyn: function ({ commit, dispatch }, payload) {
      const newFun = `F(EXB;B£SER_46;WRK.SCP) 1(MB;SCP_SET;WETEST_EXB) 2(;;${payload})`;

      // loading component
      dispatch("getComp", newFun).then(resp => {
        commit("setLoading", false);
        commit("replaceComp", resp.data);
      });
    },
  },

  getters: {
    getComponentById: (state: any) => (id: string) => {
      return state.componentMap[id];
    },
  }
});
