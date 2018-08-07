<template>
  <div
    id="webup"
    v-if="hasMainComponent">

    <component
      :is="currentMainComponent"
      :component="getMainComponent()">

    </component>
  </div>
</template>

<script>
export default {
  name: "webup",

  data() {
    return {
      // sFunction: "F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())"
      sFunction: "F(EXB;B£SER_46;WRK.SCP) 1(MB;SCP_SET;WETEST_EXB) 2(;;MAT_013)"
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
  },

  methods: {
    getMainComponent() {
      return this.$store.state.webup.comp;
    }
  },

  computed: {
    currentMainComponent() {
      const mainComp = this.getMainComponent();

      if (mainComp) {
        return mainComp.type;
      }

      return "UNK";
    },

    hasMainComponent() {
      const mainComp = this.getMainComponent();
      return mainComp && mainComp != null;
    }
  }
};
</script>

<style lang="scss">
#webup {
  margin: 1rem;
}
</style>
