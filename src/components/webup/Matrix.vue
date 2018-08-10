<template>
  <div class=".MAT">
    <table v-if="component.table">
      <thead>
        <tr>
          <th
            v-for="(column, index) in component.table.cols"
            :key="index">

            {{ column.t }}
          </th>
        </tr>
      </thead>


      <tbody>
        <tr
          v-for="row in rows"
          :key="row['ID']"
          :class="{ highlight: row.mouseOver }"
          @click="onRowClick(row)">

          <td
            v-for="(column, index) in component.table.cols"
            :key="index">

            {{ row[column.c] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BasicComponent from "@/components/webup/BasicComponent.vue";
import Dynamism from "../../utils/dynamism";

export default {
  name: "MAT",

  extends: BasicComponent,

  computed: {
    rows() {
      return this.component.table.rows.map(row => {
        const entry = row.content.entry;

        var obj = {};

        entry.forEach(e => {
          obj[e.key] = e.value.c;
        });

        return obj;
      });
    }
  },

  methods: {
    onRowClick(row) {
      console.log("click on row: ", row);

      const dyn = new Dynamism();
      dyn.source = this;
      dyn.targets = [];
      dyn.event = "click";

      this.sendDynamism("rowClick!");
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
}
</style>
