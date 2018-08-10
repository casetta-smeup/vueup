<template>
  <el-input
    placeholder="Nome"
    v-model="value"
    @change="onChange"
  ></el-input>
</template>

<script>
export default {
  name: "itx",

  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue
    };
  },

  methods: {
    onChange() {
      console.log("triggering change", this.value);
      this.$emit("change", this.value);
    }
  }
};
</script>
