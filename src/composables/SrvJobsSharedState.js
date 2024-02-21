import { ref, computed } from "vue";

export const tableData = ref({
  headers: [
    { title: "Source & Date", align: "start", key: "source" },
    { title: "Entite & Collecteur", key: "entite" },
    { title: "Etat", key: "etat" },
    { title: "Infos", key: "actions", sortable: false },
  ],
  rows: [],
});

export const selectedSrvValues = ref({
  headers: [
    { title: "Item", align: "start", key: "item" },
    { title: "Entite", key: "entite" },
    { title: "Mesure", key: "mesure" },
    { title: "Valeur", key: "valeur" },
    { title: "Horodatage", key: "horodatage" },
  ],
  rows: [],
});

export const loading = ref(false);
export const dialogloading = ref(false);

export function NodeRedData() {
  const uibuilder = window.uibuilder;
  uibuilder.start();

  // Listen for messages from uibuilder
  uibuilder.onChange("msg", (newMsg) => {
    if (newMsg.topic === "SERVER Jobs" && newMsg.Data) {
      // Ensure the loading state is set to true when waiting for data
      tableData.value.rows = []; // Clear the array

      // Process the data received from Node-RED
      console.log("Data received:", newMsg.payload);

      tableData.value.rows.push(...newMsg.Data);

      loading.value = false;
    }
  });
}

export const chartData = computed(() => {
  const okCount = tableData.value.rows.filter(
    (row) => row.etat === "OK"
  ).length;
  const notOkCount = tableData.value.rows.length - okCount;
  return [okCount, notOkCount];
});

export const errorApplications = computed(() => {
  const errors = tableData.value.rows.filter((row) => row.etat !== "OK");

  return errors;
});

export function srvJobsData() {
  const uibuilder = window.uibuilder;
  uibuilder.start();

  // Listen for messages from uibuilder
  uibuilder.onChange("msg", (newMsg) => {
    if (newMsg.topic === "SERVER Values") {
      selectedSrvValues.value.rows = []; // Clear the array

      // Process the data received from Node-RED
      console.log("Data received:", newMsg.payload);

      selectedSrvValues.value.rows.push(...newMsg.selectedSrvValues);

      dialogloading.value = false;
    }
  });
}
