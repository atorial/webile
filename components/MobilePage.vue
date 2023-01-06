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
const route = useRoute().params.option
</script>