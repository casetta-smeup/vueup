<template>
  <div class=".MAT">
    <el-table
      v-if="component.table"
      :data="tableData"
      style="width: 100%">
    
      <el-table-column
        v-for="(column, index) in component.table.cols"
        :key="index"
        :prop="column.c"
        :label="column.d"
        >

        <template slot-scope="{row}">
            <div v-if="isImage(column)">
              <img
                height='100'
                width='100'
                :src="getImageSource(column, row)">
            </div>

            <div v-else>
              {{ row[column.c] }}
            </div>
        </template>
      
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BasicComponent from "@/components/webup/BasicComponent.vue";
import Dynamism from "../../../utils/dynamism";

export default {
  name: "MAT",

  extends: BasicComponent,

  computed: {
    tableData() {
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
    },

    isImage(column) {
      return "J4" === column.t && "IMG" === column.p;
    },

    getImageSource(column, row) {
      const so = row[column.c];

      const split = so.split(";");

      return `https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/${
        split[0]
      }%253B${split[1]}%253B${split[2]}.jsf?ln=smeupImages`;
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
}
</style>
