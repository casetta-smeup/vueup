<template>
  <div class="SEC">
    <!-- flat section -->
    <div
      v-if="flatSection"
      class="flat-section"
    >
      <component
        v-if="component.comps[0].loaded"
        :is="getComponentType(component.comps[0].type)"
        :component="component.comps[0]"
      />
    </div>

    <v-tabs
      v-else-if="drawTab"
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
      @input="onInput()"
    >
      <v-tab
        v-for="(child, index) in component.comps"
        :key="index"
        ripple
      >
        {{ child.title }}
      </v-tab>

      <v-tab-item
        v-for="(child, index) in component.comps"
        :key="index"
      >
        <component
          v-if="child.loaded"
          :is="getComponentType(child.type)"
          :component="child"
        />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import BasicComponent from "@/components/webup/BasicComponent.vue";

export default {
  name: "SEC",

  extends: BasicComponent,

  data() {
    return {
      active: null
    };
  },

  computed: {
    drawTab() {
      return this.component.comps.length > 1;
    },

    flatSection() {
      return this.component.comps.length == 1;
    }
  },

  methods: {
    onInput() {
      const component = this.component.comps[this.active];

      if (!component.loaded) {
        // load component!
        this.loadComponent(component)
          .then(resp => {
            console.log("resp", resp);
            this.$store.commit("setLoading", false);
          })
          .catch(err => {
            console.error(err);
            this.$store.commit("setLoading", false);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
