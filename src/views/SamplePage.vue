<script setup>
import { ref } from "vue";

import CollectServer from "@/components/CollectServer.vue";

import CollectAgent from "@/components/CollectAgent.vue";

import FooterView from "@/components/FooterView.vue";
import ServerWidget from "../components/ServerWidget.vue";
import AgentWidget from "../components/AgentWidget.vue";

const color = ref("primary");
const tabs = ref(false);
</script>
<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" class="px-0">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h5 pt-sm-2">Collect</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs v-model="tabs" color="primary bg-white" grow>
          <v-tab :value="1">
            <v-card-title class="text-h5 pt-sm-2">
              <v-icon icon="mdi-server"></v-icon>
              Collect Server</v-card-title
            >
          </v-tab>

          <v-tab :value="2">
            <v-card-title class="text-h5 pt-sm-2">
              <v-icon icon="mdi-account"></v-icon>
              Collect Agent</v-card-title
            >
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tabs">
      <v-window-item :key="1" :value="1">
        <v-card>
          <v-row>
            <v-col cols="8" lg="8">
              <CollectServer />
            </v-col>
            <v-col cols="4" lg="4">
              <ServerWidget />
            </v-col>
          </v-row>
        </v-card>
      </v-window-item>

      <v-window-item :key="2" :value="2">
        <v-card>
          <v-row>
            <v-col cols="8" lg="8">
              <CollectAgent />
            </v-col>
            <v-col cols="4" lg="4">
              <AgentWidget />
            </v-col>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
