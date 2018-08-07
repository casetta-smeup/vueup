<template>
  <div id="app">
    <v-app>
      <v-progress-linear
        v-if="isLoading"
        :color="color"
        :indeterminate="true"></v-progress-linear>

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


<style lang="scss">
</style>
