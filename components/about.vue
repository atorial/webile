<template>

     <div class="">
       <h1>This is the about page</h1>
       <IonButton @click="router.back()">
         Go Home
       </IonButton>
     </div>

</template>
<script setup lang="ts">
import {

  IonButton
} from "@ionic/vue"
const router = useRouter();
</script>