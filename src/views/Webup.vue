<template>
  <div
    id="webup"
    v-if="hasMainComponent">

    <form v-on:submit.prevent="onSubmit">
      <el-input
        class="fun-input"
        placeholder="FUN"
        v-model="sFunction"
      ></el-input>
    </form>

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
      sFunction: "F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())"
      // sFunction: "F(EXB;B£SER_46;WRK.SCP) 1(MB;SCP_SET;WETEST_EXB) 2(;;MAT_013)"
      // sFunction: "F(EXD;*SCO;) 1(;;) 2(MB;SCP_SCH;WETEST_EXB) 4(;;SELFIR)"
    };
  },

  mounted() {
    this.updateWebup();
  },

  methods: {
    getMainComponent() {
      return this.$store.state.webup.comp;
    },

    onSubmit() {
      if (this.sFunction) {
        this.updateWebup();
      }
    },

    updateWebup() {
      // calling sfunction
      this.$store
        .dispatch("getComp", this.sFunction)
        .then(resp => {
          this.$store.commit("setLoading", false);
          this.$store.commit("setWebupComp", resp.data.comp);
        })
        .catch(err => {
          this.$store.commit("setLoading", false);
          console.log(err);
        });
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

  .fun-input {
    margin: 1rem 0;
  }
}
</style>
