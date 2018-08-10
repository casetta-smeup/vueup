import axios from "axios";

axios.defaults.baseURL = "https://webuptest.smeup.com/WebUPNightly/services";

axios.interceptors.request.use(config => {
  // add jwt to header, if fount in localStorate
  const jwt = localStorage.getItem("JWT");

  if (jwt) {
    config.headers.authorization = "Bearer " + jwt;
  }

  return config;
});
