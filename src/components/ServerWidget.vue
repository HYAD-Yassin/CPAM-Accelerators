<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify";

import { chartData, errorApplications } from "@/composables/SrvJobsSharedState";

const theme = useTheme();
const success = theme.current.value.colors.success;
const error = theme.current.value.colors.error;

const hasChartData = computed(() => {
  return chartData.value.some((value) => value > 0);
});

const chartOptions = computed(() => {
  return {
    labels: ["Ok", "A Faire"],
    chart: {
      type: "donut",
      fontFamily: `inherit`,
      foreColor: "#a1aab2",
      toolbar: {
        show: false,
      },
    },
    colors: [success, error],
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

// Use the chartData from the shared state as the series data for the chart
const Chart = chartData;
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

      <div v-if="hasChartData">
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
            <div>
              <div
                v-for="(app, index) in errorApplications"
                :key="index"
                class="d-flex align-center"
              >
                <v-icon
                  icon="mdi mdi-alert-circle"
                  class="mr-2"
                  size="20"
                  color="red"
                ></v-icon>
                <h6 class="text-subtitle-1 text-muted">
                  {{ app.source }}
                </h6>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-else class="text-center py-5">
        <!-- Message displayed when there is no data -->
        <span>Aucune donnée disponible</span>
      </div>
    </v-card-item>
  </v-card>
</template>
