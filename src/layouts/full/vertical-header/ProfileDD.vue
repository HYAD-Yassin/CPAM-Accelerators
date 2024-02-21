<script setup lang="ts">
import { UserIcon, MailIcon } from "vue-tabler-icons";

const agentData = localStorage.getItem("Agent");
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- notifications DD -->
  <!-- ---------------------------------------------- -->
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn
        class="profileBtn custom-hover-primary"
        variant="text"
        v-bind="props"
        icon
      >
        <v-avatar size="35">
          <img
            src="@/assets/images/users/avatar-1.jpg"
            height="35"
            alt="user"
          />
        </v-avatar>
      </v-btn>
    </template>
    <v-sheet rounded="md" width="250" elevation="15" class="mt-2">
      <v-list class="py-0" lines="one" density="compact">
        <v-list-item value="item1" color="primary">
          <template v-slot:prepend>
            <UserIcon stroke-width="1.5" size="20" />
          </template>
          <v-list-item-title class="pl-4 text-body-1">{{
            agentData
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item value="item2" color="primary">
          <template v-slot:prepend>
            <MailIcon stroke-width="1.5" size="20" />
          </template>
          <v-list-item-title class="pl-4 text-body-1"
            >My Account</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-menu>
</template>
