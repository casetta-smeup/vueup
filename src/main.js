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
import Button from "./components/webup/Button.vue";
import Label from "./components/webup/Label.vue";
import ExdLay from "./components/webup/ExdLay.vue";
import ImageList from "./components/webup/ImageList.vue";
import Matrix from "./components/webup/Matrix.vue";
import Scheda from "./components/webup/Scheda.vue";
import Section from "./components/webup/Section.vue";
import Spotlight from "./components/webup/Spotlight.vue";
import Unknown from "./components/webup/Unknown.vue";

Vue.component("BTN", Button);
Vue.component("EXD", Scheda);
Vue.component("IML", ImageList);
Vue.component("LAB", Label);
Vue.component("LAY", ExdLay);
Vue.component("MAT", Matrix);
Vue.component("SEC", Section);
Vue.component("SPL", Spotlight);
Vue.component("UNK", Unknown);
// register global components end

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
