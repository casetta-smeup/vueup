<template>
  <div class="login">Loggin in... please wait</div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      username: "wu3_01",
      password: "webup_04",
      env: "demo"
    };
  },

  created() {
    this.$store
      .dispatch("login", {
        env: this.env,
        user: this.username,
        pwd: this.password
      })
      .then(response => {
        this.$store.commit("setLoading", false);
        this.$store.commit("setUser", this.username);

        localStorage.setItem("JWT", response.data.data.JWT);

        this.$router.push("webup");
      })
      .catch(err => {
        this.$store.commit("setLoading", false);
        console.log(err);
      });
  }
};
</script>

<style>
.login {
  text-align: center;
}
</style>
