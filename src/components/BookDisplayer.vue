<!-- .:::: TEMPLATE ::::. -->
<template>
  <div class="book-displayer-img-container">
      <img class="book-displayer-img">
  </div>
  <h3 class="text-center book-displayer-title"> </h3>
  <h4 class="text-center book-displayer-price"> </h4>
  <button class="book-displayer-button"> SAIBA MAIS </button>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
export default {
  name: 'BookDisplayer',
}
</script>


<!-- .:::: STYLE ::::. -->
<style>
  @import "../css/colors.css";

  /* Contém a imagem de capa do livro */
  .book-displayer-img-container {
      width: 84%;
      height: auto;
      box-shadow: var(--inner-box-shadow);
  }

  /* Imagem de capa do livro */
  .book-displayer-img {
      width: 100%;
      height: 290px;
      position: relative;
      z-index: -2;
  }

  /* Título do livro */
  .book-displayer-title {
      margin-top: 0.6rem;
      margin-bottom: 1.8rem;
      text-transform: uppercase;
      color: var(--text-color);
      font-size: 1.2rem;
      height: 1.2rem;
      max-height: 1.2rem;
      overflow: visible;
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