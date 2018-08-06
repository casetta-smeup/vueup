<template>
  <div id="webup">
    <h3>HOME!</h3>
  </div>
</template>

<script>
export default {
  name: "webup",

  data() {
    return {
      sFunction: "F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())"
    };
  },

  mounted() {
    // calling sfunction
    this.$store
      .dispatch("getComp", this.sFunction)
      .then(resp => {
        this.$store.commit("setLoading", false);
        this.$store.commit("setWebupComp", resp.data.comp);
      })
      .catch(err => {
        this.$store.commit("setLoading", false);
        console.log("Error", err);
      });
  }
};
</script>

<style lang="scss">
#webup {
  margin: 1rem;
}
</style>
