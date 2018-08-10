<template>
  <v-progress-linear
    :color="color"
    :indeterminate="true">
  </v-progress-linear>
</template>

<script>
export default {
  props: ["color"]
};
</script>


<style lang="scss" scoped>
.v-progress-linear {
  margin: 0;
}
</style>
