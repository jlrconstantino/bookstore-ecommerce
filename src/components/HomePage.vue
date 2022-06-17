<!-- .:::: TEMPLATE ::::. -->
<template>
  <div id="main-container">
    
    <!-- Banner promocional -->
    <PromotionalBanner></PromotionalBanner>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Sugestões </h2>
    <BookSection :books="books"></BookSection>

    <!-- Mostradores de livros -->
    <h2 class="text-center subtitle"> Literatura </h2>
    <BookSection :books="books"></BookSection>
  </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Componentes
    import BookSection from './BookSection.vue'
    import PromotionalBanner from './PromotionalBanner.vue'

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
                books: [
                    {title: "Trying Stuff Until it Works", price: 16.90, img_src: "../assets/sample-books/trying_stuff.jpg"}, 
                    {title: "Getting an Arduino LED to Blink", price: 49.90, img_src: "../assets/sample-books/arduino_led.jpg"},
                    {title: "What is LIGMA", price: 22.70, img_src: "../assets/sample-books/what_is_ligma.png"},
                    {title: "Useless GIT Commit Messages", price: 88.49, img_src: "../assets/sample-books/commit_messages.jpeg"},
                ]
            }
        },
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
</style>