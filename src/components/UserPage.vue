<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="page-container">

        <!-- Título -->
        <h2 class="subtitle">Página de Usuário</h2>
        <div id="main-container">

            <!-- Menu lateral -->
            <div id="left-container">
                <router-link>Alfa</router-link>
                <router-link>Beta</router-link>
                <router-link>Gamma</router-link>
            </div>

            <!-- Seção de visualização -->
            <div id="right container">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Lógica local
    export default {

        // Nome do componente
        name: 'UserPage', 

    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>

    @import "../css/colors.css";

    /* Contêineres */
    #page-container {
        width: 80%;
    }
    #main-container {
        display: block;
        width: 100%;
        height: auto;
    }
    #left-container {
        width: 25%;
        float: left;
        border: var(--box-border);
    }
    #right-container {
        width: 75%;
        float: right;
        border: var(--box-border);
    }
</style>