<template>
  <div class="SEC">
    
  <div
    v-for="child in component.comps"
    :key="child.id">

    <component
      :is="child.type"
      :component="child"
      >

    </component>
  </div>
  </div>
</template>

<script>
export default {
  name: "sec",

  props: ["component"]
};
</script>

<style lang="scss" scoped>
</style>
