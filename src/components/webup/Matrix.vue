<template>
  <div
    class="MAT"
    v-if="component.loaded">

    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :disable-initial-sort="true"
      hide-actions>

      <template
        v-if="tableHeaders"
        slot="headers"
        slot-scope="props">

        <tr>
          <th
            v-for="header in props.headers"
            :key="header.text">

            {{ header.text }}
          </th>
        </tr>
      </template>

      <template
        slot="items"
        slot-scope="row">

        <tr>
          <td
            v-for="header in Object.keys(row.item)"
            :key="header">

            {{ row.item[header] }}
          </td>
        </tr>
      </template>

    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["component"],

  computed: {
    tableHeaders() {
      const headers = this.component.table.cols.map((col, index) => {
        return {
          text: col.t + "_" + index,
          value: col.c
        };
      });

      return headers;
    },

    tableItems() {
      const items = this.component.table.rows.map(row => {
        const entry = row.content.entry;

        const r = {};

        entry
          .filter(e => {
            return this.component.table.cols.some(col => {
              return e.key === col.c;
            });
          })
          .forEach(e => {
            r[e.key] = e.value.c;
          });

        return r;
      });

      console.log("items", items);

      return items;
    }
  }
};
</script>
