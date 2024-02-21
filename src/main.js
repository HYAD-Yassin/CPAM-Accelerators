import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/style.scss";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { PurpleTheme } from "./theme/LightTheme";
import { VMenu, VTabs, VTextField, VDatePicker } from "vuetify/components";

// Translations provided by Vuetify
import { fr } from "vuetify/locale";

import VueApexCharts from "vue3-apexcharts";

import "@mdi/font/css/materialdesignicons.css";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueTablerIcons from "vue-tabler-icons";

const vuetify = createVuetify({
  components,
  directives,

  locale: {
    locale: "fr",
    messages: { fr },
  },

  theme: {
    defaultTheme: "PurpleTheme",
    themes: {
      PurpleTheme,
    },
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: "md",
    },
    VTextField: {
      rounded: "lg",
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: "top",
    },
    VMenu,
    VTextField,
    VDatePicker,
    VTabs,
  },
});

function initializeData() {
  return new Promise((resolve, reject) => {
    const uibuilder = window.uibuilder;
    uibuilder.start();

    uibuilder.send({
      topic: "connection-status",
      payload: "Client connected!",
    });

    uibuilder.onChange("msg", (newMsg) => {
      if (newMsg.topic === "username") {
        localStorage.setItem("Agent", JSON.stringify(newMsg.payload));
        resolve();
      } else {
        localStorage.setItem("Agent", JSON.stringify("not_member"));
        resolve();
      }
    });
    // Optional: reject the promise if data isn't received within a timeout
    setTimeout(() => {
      reject(new Error("Data not received in time"));
    }, 10000); // 10 seconds timeout for example
  });
}

initializeData()
  .then(() => {
    const app = createApp(App);

    app.use(router);

    app.use(PerfectScrollbar);
    app.use(VueTablerIcons);
    app.use(vuetify);
    app.use(VueApexCharts);
    app.mount("#app");
  })

  .catch((error) => {
    console.error("Error initializing data:", error);
    // Handle error or initialize the app with default state
  });
