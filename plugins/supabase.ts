import {createClient} from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig();
    console.log(config.public)
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_API_KEY);
    // @ts-ignore


    // allow us to inject, see composables
    // nuxtApp.vueApp.provide('supabase', supabase);
    nuxtApp.provide('supabase', supabase);


});