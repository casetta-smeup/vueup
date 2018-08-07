import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

// axios start
axios.defaults.baseURL = "https://webuptest.smeup.com/WebUPNightly/services";
// axios.defaults.headers.get['Accepts'] = 'application/json'

axios.interceptors.request.use(config => {
  // add jwt to header, if fount in localStorate
  const jwt = localStorage.getItem("JWT");

  if (jwt) {
    config.headers.authorization = "Bearer " + jwt;
  }

  return config;
});
// axios end

// register global components start
import Scheda from "./components/webup/Scheda.vue";
import Section from "./components/webup/Section.vue";
import Unknown from "./components/webup/Unknown.vue";

Vue.component("EXD", Scheda);
Vue.component("SEC", Section);
Vue.component("UNK", Unknown);
// register global components end

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
