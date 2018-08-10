import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/element";
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
import Chart from "./components/webup/cha/Cha.vue";
import Label from "./components/webup/Label.vue";
import ExdLay from "./components/webup/ExdLay.vue";
import ImageList from "./components/webup/ImageList.vue";
import InputPanel from "./components/webup/inp/Inp.vue";
import Matrix from "./components/webup/mat/Mat.vue";
import Scheda from "./components/webup/Scheda.vue";
import Section from "./components/webup/Section.vue";
import Spotlight from "./components/webup/Spotlight.vue";
import Unknown from "./components/webup/Unknown.vue";

Vue.component(Button.name, Button);
Vue.component(Chart.name, Chart);
Vue.component(Scheda.name, Scheda);
Vue.component(ImageList.name, ImageList);
Vue.component(InputPanel.name, InputPanel);
Vue.component(Label.name, Label);
Vue.component(ExdLay.name, ExdLay);
Vue.component(Matrix.name, Matrix);
Vue.component(Section.name, Section);
Vue.component(Spotlight.name, Spotlight);
Vue.component(Unknown.name, Unknown);
// register global components end

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
