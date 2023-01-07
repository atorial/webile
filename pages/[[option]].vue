<template>
<!--Page Switcher-->
  <div v-if="layout ==='mobile'" class="">
    <MobilePage/>
  </div>
  <div v-else class="">
    <h1>Website</h1>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "nuxt/dist/pages/runtime";
import Mobile from "~/layouts/mobile.vue";
const layout = useRuntimeConfig().UIlayout

</script>

<style scoped>

</style>