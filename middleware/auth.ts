import {useSupabase} from "~/composables/useSupabase";

export default defineNuxtRouteMiddleware((to, from) => {
    const client = useSupabase();
    // @ts-ignore
    if (!client.auth.getUser()) {
        return "/auth";
    }
})