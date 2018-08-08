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
import BasicComponent from "@/components/webup/BasicComponent.vue";

export default {
  extends: BasicComponent
};
</script>
