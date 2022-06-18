<!-- .:::: TEMPLATE ::::. -->
<template>
    <div class="book-displayer-container">
        <div class="book-displayer-img-container">
            <img :src="book.img_src" class="book-displayer-img">
        </div>
        <h3 class="text-center book-displayer-title">{{book.title}}</h3>
        <h4 class="text-center book-displayer-price">{{format_price(book.price)}}</h4>
        <button class="book-displayer-button" @click="go_to_product_page(book)"> SAIBA MAIS </button>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
    export default {
        name: 'BookDisplayer',
        props: ['book'], 
        methods: {
            go_to_product_page(book) {
                this.$router.push({
                    name: 'product', 
                    query: {id: book.id}, 
                    params: {
                        id: book.id, 
                        title: book.title, 
                        price: book.price, 
                        rating: book.rating, 
                        author: book.author,
                        publisher: book.publisher,
                        finishing: book.finishing, 
                        year: book.year, 
                        language: book.language, 
                        pages: book.pages, 
                        description: book.description,
                        img_src: book.img_src,
                    }
                });
                window.scrollTo(0,0);
            }, 
            format_price(price) {
                return "R$ " + price.toFixed(2).toString().replace('.', ',');
            }
        }
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* Contêiner de um mostrador de livros */
    .book-displayer-container {
        justify-content: baseline;
        width: 20%;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: var(--box-shadow);
        border: 1px groove rgba(110, 110, 110, 0.829);
        border-radius: 8px;
        padding-top: 1rem;
    }

    /* Contém a imagem de capa do livro */
    .book-displayer-img-container {
        width: 84%;
        height: auto;
        box-shadow: var(--inner-box-shadow);
    }

    /* Imagem de capa do livro */
    .book-displayer-img {
        width: 100%;
        height: calc(290px * 0.9);
        position: relative;
        z-index: -2;
    }

    /* Título do livro */
    .book-displayer-title {
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.6rem;
        margin-bottom: 1.8rem;
        text-transform: uppercase;
        color: var(--text-color);
        font-size: 1.2rem;
        height: 1.2rem;
        max-height: 1.2rem;
    }

    /* Preço do título */
    .book-displayer-price {
        margin-bottom: 1.2rem;
        color: var(--darker-text-color);
        font-size: 1.8rem;
    }

    /* Botão de compra */
    .book-displayer-button {
        width: 80%;
        height: 2.2rem;
        background-color: var(--foreground-color);
        color: antiquewhite;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-radius: 4px;
        border: none;
        margin-bottom: 1rem;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    .book-displayer-button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }
</style>