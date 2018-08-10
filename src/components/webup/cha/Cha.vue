<template>
  <div class=".CHA">
    <GChart
      :type="chartType"
      :data="chartData"
      :options="chartOptions"
      :events="chartEvents"
      ref="gChart"
    />

    <span v-if="message">
      {{ message }}
    </span>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import BasicComponent from "../BasicComponent.vue";

export default {
  name: "CHA",

  extends: {
    BasicComponent
  },

  components: {
    GChart
  },

  data() {
    return {
      message: "",

      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],

      chartOptions: {},

      chartType: "ColumnChart",

      chartEvents: {
        select: () => {
          const chart = this.$refs.gChart.chartObject;
          if (chart.getSelection().length > 0) {
            const selectedItem = chart.getSelection()[0];

            const rowIndex = selectedItem.row;
            const colIndex = selectedItem.column;

            this.message = `Hai selezionato la colonna ${
              this.chartData[0][colIndex]
            } ed il suo valore e' ${this.chartData[rowIndex + 1][colIndex]}`;
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
