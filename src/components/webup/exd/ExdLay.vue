<template>
  <div class="LAY">
    <div
      v-for="child in component.comps"
      :key="child.id"
      >

      <component
        :is="getComponentType(child.type)"
        :component="child"
        >

      </component>
    </div>
  </div>
</template>

<script>
import BasicComponent from "@/components/webup/BasicComponent.vue";
import Section from "@/components/webup/exd/Section.vue";

export default {
  name: "LAY",

  extends: BasicComponent,

  components: {
    SEC: Section
  }
};
</script>
