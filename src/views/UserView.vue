<!-- .:::: TEMPLATE ::::. -->
<template>

    <!-- Formulário de login/registro -->
    <LogRegForm></LogRegForm>
    
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Importação de componentes
    import LogRegForm from "../components/LogRegForm.vue";

    // Lógica local
    export default {

        // Nome do componente
        name: "UserView", 

        // Registro de componentes
        components: {
            LogRegForm, 
        }, 

    }

</script>


<!-- .:::: STYLE ::::. -->
<style>

</style>