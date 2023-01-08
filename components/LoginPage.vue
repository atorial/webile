<template>
  <div>

    {{route}}
    <div v-if="route===''" class="login">Login Here</div>
    <div v-if="route==='register'" class="register">Register Here</div>
    <div v-if="route==='recovery'" class="reset">Password Recovery</div>
    <div v-if="route==='new'" class="new-password">Set New Password {{route}}</div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute().params.auth;
</script>

<style lang="scss" scoped>

</style>