<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="logo">
    <RouterLink to="/">
      <img
        src="@/assets/images/logos/index.png"
        alt="CPAM Vaucluse"
        width="190"
        height="49"
      />
    </RouterLink>
  </div>
</template>
