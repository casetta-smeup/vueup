<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      username: "wu3_01",
      password: "webup_04",
      env: "demo"
    };
  },

  mounted() {
    this.$store.dispatch("login", {
      env: this.env,
      user: this.username,
      pwd: this.password
    });
  }
};
</script>
