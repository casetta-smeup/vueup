<template>
  <el-select
    v-model="value"
    placeholder="Tartaruga ninja preferita"
    @change="onChange">

    <el-option
      v-for="item in items"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "cmb",

  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue,
      items: ["Donatello", "Leonardo", "Michelangelo", "Raffaello"]
    };
  },

  methods: {
    onChange() {
      this.$emit("change", this.value);
    }
  }
};
</script>
