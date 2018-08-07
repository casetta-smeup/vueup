<template>
  <div
    class="MAT"
    v-if="component.loaded">

    Matrix!
  </div>
</template>

<script>
export default {
  props: ["component"]
};
</script>
