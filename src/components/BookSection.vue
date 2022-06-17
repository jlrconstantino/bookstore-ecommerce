<!-- .:::: TEMPLATE ::::. -->
<template>
    <div class="book-displayers-div">
        <BookDisplayer v-for="book in books" :key="book" v-bind:book="book"></BookDisplayer>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
    import BookDisplayer from './BookDisplayer.vue'
    export default {
        name: 'BookSection', 
        components: {
            BookDisplayer,
        },
        props: ['books']
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* Divisão de amostragem de livros */
    .book-displayers-div {
        width: 80%;
        height: auto;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
</style>