<template>
  <div id="app">
    <v-app>
      <div class="loadin">
        <v-progress-linear
          v-if="isLoading"
          :color="color"
          :indeterminate="true">
        </v-progress-linear>
      </div>

      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "green"
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  .loading {
    width: 500px;
    margin: auto;
  }
}
</style>
