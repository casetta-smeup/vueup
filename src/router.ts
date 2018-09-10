import Vue from "vue";
import Router from "vue-router";
import Webup from "./views/Webup.vue";
import Login from "./components/login/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/webup",
      name: "webup",
      component: Webup
    }
  ]
});
