<template>
  <div>
    <el-checkbox
      v-model="value"
      @change="onChange"
    >Is uomo focaccina a bellissimo uomo?</el-checkbox>
  </div>
</template>

<script>
export default {
  name: "chk",

  props: ["initialValue"],

  data() {
    return {
      value: this.initialValue
    };
  },

  methods: {
    onChange() {
      this.$emit("change", this.value);
    }
  }
};
</script>
