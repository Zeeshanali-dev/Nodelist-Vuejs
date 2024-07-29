<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <div class="container mx-auto px-4 lg:px-0">
    <RouterView />
  </div>
</template>

<style scoped></style>
