<template>
  <div class="INP">
    <div class="field-container">
      <itx
        :initialValue="itxValue"
        @change="onItxChange($event)"
      ></itx>

      <cmb
        :initialValue="cmbValue"
        @change="onCmbChange($event)"
      ></cmb>

      <chk
        :initialValue="chkValue"
        @change="onChkChange($event)"
      ></chk>
    </div>

    <div class="field-values">
      <ul>
        <li>ITX: {{ itxValue }}</li>
        <li>CMB: {{ cmbValue }}</li>
        <li>CHK: {{ chkValue }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BasicComponent from "../BasicComponent.vue";

// fields
import Chk from "./fields/Chk.vue";
import Cmb from "./fields/Cmb.vue";
import Itx from "./fields/Itx.vue";

export default {
  name: "INP",

  components: {
    Chk,
    Cmb,
    Itx
  },

  extends: {
    BasicComponent
  },

  data() {
    return {
      itxValue: "",
      cmbValue: "",
      chkValue: true
    };
  },

  methods: {
    onChkChange($event) {
      this.chkValue = $event;
    },

    onCmbChange($event) {
      this.cmbValue = $event;
    },

    onItxChange($event) {
      this.itxValue = $event;
    }
  }
};
</script>

<style scoped>
.INP {
  max-width: 500px;
}
</style>
