<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const tableData = ref({
  headers: [
    { title: "Boat Type", align: "start", key: "name" },
    { title: "Speed (knots)", align: "end", key: "speed" },
    { title: "Length (m)", align: "end", key: "length" },
    { title: "Price ($)", align: "end", key: "price" },
    { title: "Year", align: "end", key: "year" },
  ],
  rows: [
    {
      name: "Speedster",
      speed: 35,
      length: 22,
      price: 300000,
      year: 2021,
    },
    {
      name: "OceanMaster",
      speed: 25,
      length: 35,
      price: 500000,
      year: 2020,
    },
    {
      name: "Voyager",
      speed: 20,
      length: 45,
      price: 700000,
      year: 2019,
    },
    {
      name: "WaveRunner",
      speed: 40,
      length: 19,
      price: 250000,
      year: 2022,
    },
    {
      name: "SeaBreeze",
      speed: 28,
      length: 31,
      price: 450000,
      year: 2018,
    },
    {
      name: "HarborGuard",
      speed: 18,
      length: 50,
      price: 800000,
      year: 2017,
    },
    {
      name: "SlickFin",
      speed: 33,
      length: 24,
      price: 350000,
      year: 2021,
    },
    {
      name: "StormBreaker",
      speed: 22,
      length: 38,
      price: 600000,
      year: 2020,
    },
    {
      name: "WindSail",
      speed: 15,
      length: 55,
      price: 900000,
      year: 2019,
    },
    {
      name: "FastTide",
      speed: 37,
      length: 20,
      price: 280000,
      year: 2022,
    },
  ],
});
const search = ref("");

const loading = ref(false);

function toggleLoading() {
  loading.value = !loading.value;
  // You might want to call startCollect or similar function here
  // and then set loading.value = false when the operation is complete
}
</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item class="pb-0">
      <v-card-title class="text-h5 pt-sm-2">
        <v-icon icon="mdi-account" color="primary"></v-icon>
        Collecte Agent</v-card-title
      >
      <div class="recent-transaction mt-10 px-3">
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>

        <v-data-table
          :headers="tableData.headers"
          :items="tableData.rows"
          :search="search"
          :items-per-page="10"
        ></v-data-table>
      </div>
      <v-col class="text-center">
        <v-btn
          :disabled="loading"
          :loading="loading"
          class="mr-6 bg-primary"
          @click="toggleLoading"
        >
          Commencer La Collecte
        </v-btn>
      </v-col>
    </v-card-item>
  </v-card>
</template>
