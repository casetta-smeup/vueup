<template>
  <div class="EXD">
    Scheda!
    <div
      v-for="comp in component.comps"
      :key="comp.id">

      <component
        v-for="sec in comp.comps"
        :is="sec.type"
        :key="sec.id"
        :sec="sec"
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
