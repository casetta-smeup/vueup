<template>
  <div class="LAY">
    <div
      v-for="child in component.comps"
      :key="child.id"
      >

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
  props: ["component"]
};
</script>
