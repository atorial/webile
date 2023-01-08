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

const layout = useRuntimeConfig().UIlayout
definePageMeta({
  middleware: ["auth"]
})
</script>

<style scoped>

</style>