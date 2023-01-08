<template>
  <div>
   <Store/>
  </div>
</template>

<script setup>
const router = useRouter()



const client = useSupabase()

const user = client.auth.getUser()

// function
const doSignOut = async () => {
  await client.auth.signOut();
  router.replace("/auth");
}
</script>

<style lang="scss" scoped>

</style>