<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const primary = theme.current.value.colors.success;
const lightprimary = theme.current.value.colors.error;
const chartOptions = computed(() => {
  return {
    labels: ["series-1", "series-2", "series-3"],
    chart: {
      type: "donut",
      fontFamily: `inherit`,
      foreColor: "#a1aab2",
      toolbar: {
        show: false,
      },
    },
    colors: [primary, lightprimary, "#F9F9FD"],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "60%",
          background: "transparent",
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: { theme: "light", fillSeriesColor: false },
  };
});
const Chart = [38, 40, 25];
</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <v-card-title class="text-h5 pt-sm-2">
          <v-icon icon="mdi-server-security" color="primary"></v-icon>
          Serveur</v-card-title
        >
      </div>
      <v-row>
        <v-col cols="12" sm="12" class="pl-lg-0">
          <div class="d-flex align-center flex-shrink-0">
            <apexchart
              class="pt-5"
              type="donut"
              height="250"
              :options="chartOptions"
              :series="Chart"
            >
            </apexchart>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <div class="d-flex">
            <h6 class="text-subtitle-1 text-muted">
              <v-icon
                icon="mdi mdi-checkbox-blank-circle"
                class="mr-1"
                size="10"
                color="primary"
              ></v-icon>
              2022
            </h6>
            <h6 class="text-subtitle-1 text-muted pl-5">
              <v-icon
                icon="mdi mdi-checkbox-blank-circle"
                class="mr-1"
                size="10"
                color="green"
              ></v-icon>
              2023
            </h6>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
