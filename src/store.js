import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    setUser(state, user) {
      state.user = user;
    }
  },

  actions: {
    login: function({ commit }, payload) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("env", payload.env);
      urlSearchParams.append("user", payload.user);
      urlSearchParams.append("pwd", payload.pwd);

      axios
        .post("/auth/login", urlSearchParams, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(response => {
          console.log(response)
          commit("setUser", payload.user);
          commit("setToken", response.data.data.JWT);
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  }
});
