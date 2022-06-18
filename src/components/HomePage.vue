<!-- .:::: TEMPLATE ::::. -->
<template>
    <!-- Banner promocional -->
    <PromotionalBanner></PromotionalBanner>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Sugestões </h2>
    <BookSection :books="books.slice(0,3)"></BookSection>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Literatura </h2>
    <BookSection :books="books.slice(3,6)"></BookSection>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Terror </h2>
    <BookSection :books="books.slice(6,9)"></BookSection>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Para manipulação da base de dados local
    import { loadLocalStorage } from "../utils/local-storage-management";

    // Componentes
    import BookSection from './BookSection.vue';
    import PromotionalBanner from './PromotionalBanner.vue';

    // Lógica local
    export default {

        // Nome do componente
        name: 'HomePage',

        // Atribuição dos componentes
        components: {
            BookSection, 
            PromotionalBanner, 
        },

        // Dados temporários
        data() {
            return {
                books: [],
            }
        },

        // Carregamento da base de dados
        created() {
            loadLocalStorage().then(res => {
                this.books = res;
            });
        }, 
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    
</style>