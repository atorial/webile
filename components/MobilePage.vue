<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle class="capitalize">{{ route ===""? "Home": route }}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
   <div v-if="route ===''" class="home">
    <home/>
   </div>
      <div v-if="route==='about'" class="">
        <about/>
      </div>
      <div v-if="route==='auth'">
        <LoginPage/>
      </div>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/vue"
const router = useRouter();
const routeData = useRoute().params.option as string
const route = routeData.includes("-")? routeData.split("-")[1]: routeData
definePageMeta({
  middleware: ["auth"]
})
</script>