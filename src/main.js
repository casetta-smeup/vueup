import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

// axios
axios.defaults.baseURL = "https://webuptest.smeup.com/WebUPNightly/services";
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
// axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
