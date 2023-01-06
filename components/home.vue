<template>
  <div>
    <h1>WELCOME HOME on IOS AND ANDROID</h1>
    <IonButton @click="router.push('/about')">
      Goto About Page
    </IonButton>
    {{user}}
  </div>
</template>

<script setup>
const router = useRouter()
definePageMeta({
  middleware: ["auth"]
})
import  {IonButton} from "@ionic/vue";
const client = useSupabase()

const user = client.auth.getUser()

// function
const doSignOut = async () => {
  await client.auth.signOut();
  router.replace("/login");
}
</script>

<style lang="scss" scoped>

</style>