<script>
export default {
  props: ["component"],

  created() {
    if (this.component) {
      // saving component in store
      this.$store.commit("addComponentToMap", {
        id: this.component.id,
        comp: this
      });
    }
  },

  destroyed() {
    if (this.component) {
      // remove component from store
      this.$store.commit("removeComponentFromMap", this.component.id);
    }
  },

  methods: {
    loadComponent() {
      const _component = this.$store.getters.getComponentById(
        this.component.id
      );
      console.log("loading component", _component);
    },

    getComponentType(compType) {
      if (compType) {
        // managed components
        switch (compType) {
          case "BTN":
          case "CHA":
          case "EXD":
          case "IML":
          case "INP":
          case "LAB":
          case "LAY":
          case "MAT":
          case "SEC":
          case "SPL":
            return compType;

          default:
            return "UNK";
        }
      }

      return "UNK";
    },

    getAncestors() {
      var ancestors = new Array();

      ancestors.push(this);

      let parent = this.$parent;
      while (parent != null) {
        ancestors.push(parent);
        parent = parent.$parent;
      }

      return ancestors;
    },

    getChildren() {
      return this.$children.flatMap(child => child.getChildren());
    },

    extractIdentifiableComponentById(comp, id) {
      console.log(comp);
      console.log(id);
      return null;
    },

    getIdentifiableComponentById(id) {
      let comp = null;

      if (!id) {
        return comp;
      }

      const ancestors = this.getAncestors();

      if (id === "webup") {
        // TODO return webup component
        return comp;
      }

      for (const parent in ancestors) {
        comp = this.extractIdentifiableComponentById(parent, id);
        if (comp != null) {
          break;
        }
      }

      return comp;
    },

    sendDynamism(dynamism) {
      console.log("sending dynamism: ", dynamism);
    }
  }
};
</script>
