<template>
  <div id="webup">
    <!-- header -->
    <webup-header></webup-header>

    <div class="loading">
      <loading
        :color="color"
        :style="{display: loading ? 'block' : 'none'}"
      ></loading>
    </div>

    <div class="webup-content">
      <form v-on:submit.prevent="onSubmit">
        <el-input
          class="fun-input"
          placeholder="FUN"
          v-model="sFunction"
        ></el-input>
      </form>

      <component
        v-if="hasMainComponent"
        :is="currentMainComponent"
        :component="getMainComponent()">
      </component>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/shared/Loading.vue";
import WebupHeader from "@/components/shared/WebupHeader.vue";

export default {
  name: "webup",

  components: {
    Loading,
    WebupHeader
  },

  data() {
    return {
      sFunction: "F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())",
      color: "blue-grey"
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
    },

    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
#webup {
  margin: 1rem;

  .fun-input {
    margin: 1rem 0;
  }

  .webup-content {
    margin-top: 50px;
  }

  .loading {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
  }
}
</style>
