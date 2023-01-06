<template>
  <div class="bg-purple text-gray-300 text-2xl p-3">
<h1 class="text-xl">Welcome To Webile please replace me. {{layout}}</h1>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "nuxt/dist/pages/runtime";
const layout = useRuntimeConfig().UIlayout
</script>

<style scoped>

</style>