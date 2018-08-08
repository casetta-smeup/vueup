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
import BasicComponent from "@/components/webup/BasicComponent.vue";

export default {
  name: "sec",

  extends: BasicComponent
};
</script>

<style lang="scss" scoped>
</style>
