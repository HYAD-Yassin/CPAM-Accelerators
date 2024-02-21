<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
// Function to simulate fetching data

import {
  tableData,
  loading,
  NodeRedData,
  dialogloading,
  srvJobsData,
  selectedSrvValues,
} from "@/composables/SrvJobsSharedState";

// Dialog Infos
const dialog = ref(false);
const currentItem = ref({});

const headers = computed(() => tableData.value.headers);

const rows = computed(() => tableData.value.rows);

const srvValuesHeaders = computed(() => selectedSrvValues.value.headers);

const srvValuesRows = computed(() => selectedSrvValues.value.rows);

const search = ref("");
const dialogSearch = ref("");

const startCollect = () => {
  const uibuilder = window.uibuilder;
  loading.value = true;
  uibuilder.send({ topic: "startCollect", payload: "trigger Flow 2" });
  NodeRedData();
};

const openDialog = (item) => {
  const uibuilder = window.uibuilder;
  dialogloading.value = true;
  currentItem.value = item;

  uibuilder.send({
    topic: "SrvValuesCollect",
    payload: "trigger Flow 3",
    item: currentItem.value,
  });

  srvJobsData();
  dialog.value = true;
};

const getChipColor = (mesure) => {
  if (mesure === "Charge") {
    return "primary"; // blue
  } else if (mesure === "Plus ancien") {
    return "green";
  } else {
    return "red";
  }
};
</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item class="pb-0">
      <v-card-title class="text-h5 pt-sm-2">
        <v-icon icon="mdi-server-security" color="primary"></v-icon>
        Collecte Serveur</v-card-title
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
          :headers="headers"
          :items="rows"
          :search="search"
          :items-per-page="10"
          item-key="id"
        >
          <template v-slot:item.source="{ item }">
            <td>
              <div class="text-body-1 font-weight-bold">{{ item.source }}</div>

              <div class="text-muted">{{ item.horodatage }}</div>
            </td>
          </template>

          <template v-slot:item.entite="{ item }">
            <td>
              <div class="text-body-1 font-weight-bold">{{ item.entite }}</div>
              <div class="text-muted">{{ item.collecteur }}</div>
            </td>
          </template>

          <template v-slot:item.etat="{ item }">
            <td>
              <v-icon
                :color="item.etat === 'OK' ? 'green' : 'red'"
                :icon="
                  item.etat === 'OK'
                    ? 'mdi-check-decagram'
                    : 'mdi-alert-decagram'
                "
              ></v-icon>
            </td>
          </template>

          <template v-slot:item.actions="{ item }">
            <td>
              <!-- Check if the current item is in the errorApplications list -->
              <div v-if="item.etat === 'OK'">
                <v-btn
                  :disabled="dialogloading"
                  :loading="dialogloading"
                  class="mr-6 bg-primary"
                  icon="mdi-plus-circle"
                  @click="openDialog(item)"
                ></v-btn>
              </div>
              <div v-else class="text-error text-body-1 font-weight-bold">
                A Faire
              </div>
            </td>
          </template>
        </v-data-table>
      </div>
      <v-col class="text-center">
        <v-btn
          :disabled="loading"
          :loading="loading"
          class="mr-6 bg-primary"
          @click="startCollect"
        >
          Commencer La Collecte
        </v-btn>
      </v-col>
    </v-card-item>
  </v-card>

  <!------------------------------------ Dialog --------------------------------------------------->

  <v-dialog v-model="dialog" transition="dialog-top-transition" width="auto">
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title>{{ currentItem.source }}</v-toolbar-title>
      </v-toolbar>
      <div class="recent-transaction mt-10 px-3">
        <v-text-field
          v-model="dialogSearch"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
        <v-data-table
          :headers="srvValuesHeaders"
          :items="srvValuesRows"
          :search="dialogSearch"
          :items-per-page="5"
          item-key="item"
        >
          <!-- the 'Item' column -->
          <template v-slot:item.item="{ item }">
            <span class="text-subtitle-1 font-weight-bold">{{
              item.item
            }}</span>
          </template>

          <!-- the 'Mesure' column -->
          <template v-slot:item.mesure="{ item }">
            <v-chip
              color="white"
              :class="'text-body-1 bg-' + getChipColor(item.mesure)"
              size="small"
            >
              {{ item.mesure }}
            </v-chip>
          </template>
        </v-data-table>
      </div>
      <v-card-actions class="justify-end">
        <v-btn text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!------------------------------------ Dialog --------------------------------------------------->
</template>
