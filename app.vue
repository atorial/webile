<template>
  <div>
    <NuxtLayout :name="ilayout">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
/**
 * @param {string} ilayout - the prefered layout
 */
const ilayout= useRuntimeConfig().UIlayout;

</script>
