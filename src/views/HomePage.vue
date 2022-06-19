<!-- .:::: TEMPLATE ::::. -->
<template>
    <!-- Banner promocional -->
    <PromotionalBanner></PromotionalBanner>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Sugestões </h2>
    <BookSection :books="books.slice(0,4)"></BookSection>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Literatura </h2>
    <BookSection :books="books.slice(4,8)"></BookSection>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Terror </h2>
    <BookSection :books="books.slice(8,12)"></BookSection>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Componentes
    import BookSection from '../components/BookSection.vue';
    import PromotionalBanner from '../components/PromotionalBanner.vue';

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
                books: this.$store.getters.books,
            }
        },
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    
</style>