<template>
  <div
    class="EXD"
    :style="getComponentStyle()">

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
import BasicComponent from "@/components/webup/BasicComponent.vue";

export default {
  extends: BasicComponent,

  methods: {
    getComponentStyle() {
      return {
        display: "flex",
        flexDirection: this.component.direction === "ROW" ? "row" : "column"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.EXD {
  > div {
    width: 100%;
  }
}
</style>
