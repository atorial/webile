<template>
 <div class="">
   <IonApp>
     <slot/>
   </IonApp>
 </div>

</template>

<script setup lang="ts">
import { IonApp } from "@ionic/vue"
useHead({
  meta: [
    {
      content: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover', name: "viewport"
    }
  ]
})
</script>

<style scoped>

</style>