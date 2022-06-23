<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="page-container">

        <!-- Título -->
        <h2 class="subtitle">{{page_title}}</h2>
        <div id="main-container">

            <!-- Menu lateral -->
            <div id="left-container" class="">
                <router-link to="/account/profile/data" class="left-container-item">Dados Pessoais</router-link>
                <router-link to="/account/profile/payment-methods" class="left-container-item">Formas de Pagamento</router-link>
                <router-link to="/account/profile/security" class="left-container-item">Segurança</router-link>
            </div>

            <!-- Seção de visualização -->
            <div id="right-container">
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
        name: 'AccountNavigationView', 

        // Atributos computados
        computed: {

            // Título da página
            page_title: () => {
                return "Dados Pessoais";
            }, 

        },
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
        margin-top: 0;
        display: block;
        width: 100%;
        height: auto;
    }
    #left-container {
        width: calc(20% - 2rem);
        float: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0;
    }
    #right-container {
        width: calc(80% - 2rem);
        min-height: 12.0rem;
        padding: 1rem;
        float: right;
        border: var(--box-light-border);
        box-shadow: var(--box-shadow-left);
    }

    /* Elementos do menu lateral */
    .left-container-item {
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        min-height: 2.0rem;
        font-size: 1.2rem;
        color: var(--text-color);
        box-shadow: var(--box-shadow-left);
        /*border: var(--box-light-border);*/
        transition-duration: 0.3s;
        transition-timing-function: linear;
    }
    .left-container-item:hover {
        color: var(--link-hover-color);
    }
</style>