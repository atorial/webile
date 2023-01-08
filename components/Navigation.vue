<template>
  <div class="flex">
    <div class="desktop">
      <slot/>
    </div>
    <div class="mobile flex justify-between items-center">
      <div class="search">
        <Bars3CenterLeftIcon class="w-16"/>
        <slot/>
      </div>
      <div class="cart">
        <ShoppingBagIcon class="w-16"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Bars3CenterLeftIcon, ShoppingBagIcon} from "@heroicons/vue/24/outline";
</script>

<style scoped>

</style>