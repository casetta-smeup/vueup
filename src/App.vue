<template>
  <div id="app">
    <div class="loadin">
      <v-progress-linear
        v-if="isLoading"
        :color="color"
        :indeterminate="true">
      </v-progress-linear>
    </div>

    <router-view />
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
