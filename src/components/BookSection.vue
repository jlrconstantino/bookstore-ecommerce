<!-- .:::: TEMPLATE ::::. -->
<template>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>
    export default {
        name: 'BookSection',
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* Divisão de amostragem de livros */
    .book-displayers-div {
        width: 90%;
        height: auto;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    /* Contêiner de um mostrador de livros */
    .book-displayer-container {
        justify-content: baseline;
        width: 18vw;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: var(--box-shadow);
        border: 1px groove rgba(110, 110, 110, 0.829);
        border-radius: 8px;
        padding-top: 1rem;
    }
</style>