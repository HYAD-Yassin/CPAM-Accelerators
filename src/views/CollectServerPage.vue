<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

import CollectServer from "@/components/CollectServer.vue";

import FooterView from "@/components/FooterView.vue";
import ServerWidget from "../components/ServerWidget.vue";

// State to control the dialog visibility
const dialog = ref(false);

// State for the date picker model
const date = ref(new Date());

// Helper function to format date as 'YYYY-MM-DD' in local timezone
function formatDate(dateToFormat) {
  const offset = dateToFormat.getTimezoneOffset();
  const localDate = new Date(dateToFormat.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split("T")[0];
}

// Computed property to format the date as a string in local timezone
const formattedDate = computed(() => {
  return formatDate(date.value); // Formats date as 'YYYY-MM-DD'
});

// Watcher to close the dialog when a date is selected
watch(date, (newDate) => {
  dialog.value = false; // Close dialog when date is selected
});
</script>
<template>
  <v-row>
    <v-col cols="12">
      <!-- Date Picker -->
      <v-row>
        <v-col cols="12">
          <!-- Date Picker -->
          <v-row>
            <v-col cols="6" sm="6">
              <!-- Read-only text field that displays the date -->
              <v-text-field
                v-model="formattedDate"
                label="Date Sélectionnée"
                prepend-inner-icon="mdi-calendar-check"
                readonly
                outlined
                @click="dialog = true"
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="4">
              <!-- Dialog with date picker -->
              <v-dialog
                v-model="dialog"
                transition="dialog-top-transition"
                width="auto"
              >
                <v-card>
                  <v-date-picker
                    v-model="date"
                    color="blue lighten-1"
                    header-color="blue lighten-1"
                    @change="dialog = false"
                    :max="formattedDate"
                  ></v-date-picker>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <!-- /Date Picker -->
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8" lg="8">
          <CollectServer />
        </v-col>
        <v-col cols="4" lg="4">
          <ServerWidget />
        </v-col>
      </v-row>
    </v-col>
    <FooterView />
  </v-row>
</template>
