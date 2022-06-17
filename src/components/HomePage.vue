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
                    {
                        title: "Trying Stuff Until it Works", 
                        price: 16.90, 
                        img_src: require("@/assets/sample-books/trying_stuff.jpg"), 
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
                        author: "The Practical Developer",
                        publisher: "O RLY?",
                        finishing: "Brochado", 
                        year: 2009, 
                        language: "Latim", 
                        pages: 420, 
                        id: 1, 
                    }, 
                    {
                        title: "Getting an Arduino LED to Blink", 
                        price: 49.90, 
                        img_src: require("@/assets/sample-books/arduino_led.jpg"),
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
                        author: "The Practical Developer",
                        publisher: "O RLY?",
                        finishing: "Cartonado", 
                        year: 2017, 
                        language: "Portugol", 
                        pages: 128, 
                        id: 2, 
                    },
                    {
                        title: "What is LIGMA", 
                        price: 22.70, 
                        img_src: require("@/assets/sample-books/what_is_ligma.png"),
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
                        author: "B. J. Gay",
                        publisher: "O RLY?",
                        finishing: "Agrafado", 
                        year: 1919, 
                        language: "Espanhol", 
                        pages: 624, 
                        id: 3, 
                    },
                    {
                        title: "Useless GIT Commit Messages", 
                        price: 88.49, 
                        img_src: require("@/assets/sample-books/commit_messages.jpeg"),
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam ultricies, dapibus mi quis, euismod enim. Curabitur id vehicula.",
                        author: "The Practical Developer",
                        publisher: "O RLY?",
                        finishing: "Mecânico", 
                        year: 2021, 
                        language: "Português", 
                        pages: 242, 
                        id: 4, 
                    },
                ]
            }
        },
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    
</style>