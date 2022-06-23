<!-- .:::: TEMPLATE ::::. -->
<template>
    <router-view></router-view>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Vuex
    import store from '@/store/index.js';

    // Lógica local
    export default {

        // Nome do componente
        name: "AccountView", 

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