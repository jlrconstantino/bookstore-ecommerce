<!-- .:::: TEMPLATE ::::. -->
<template>
    <LogRegForm v-if="!logged"></LogRegForm>
    <AccountNavigator v-if="logged"></AccountNavigator>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Vuex
    import store from '@/store/index.js';

    // Importação de componentes
    import LogRegForm from "../components/LogRegForm.vue";
    import AccountNavigator from "../components/AccountNavigator.vue";

    // Lógica local
    export default {

        // Nome do componente
        name: "AccountView", 

        // Registro de componentes
        components: {
            LogRegForm, 
            AccountNavigator, 
        }, 

        // Atributos computados
        computed: {

            // Observa modificações de login
            logged: () => {
                window.scrollTo(0,0);
                return store.state.user.id != null;
            }, 

        },

    }

</script>


<!-- .:::: STYLE ::::. -->
<style>
</style>