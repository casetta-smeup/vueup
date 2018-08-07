<template>
  <div class="EXD">

    <div
      v-for="comp in component.comps"
      :key="comp.id">

      <component
        :is="comp.type"
        :key="comp.id"
        :component="comp"
        >

      </component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["component"]
};
</script>

<style lang="scss" scoped>
</style>
