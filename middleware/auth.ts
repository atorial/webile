import {useSupabase} from "~/composables/useSupabase";

export default defineNuxtRouteMiddleware((to, from) => {
    const client = useSupabase();
    // console.log(client)
});