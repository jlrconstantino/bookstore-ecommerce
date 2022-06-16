<!-- .:::: TEMPLATE ::::. -->
<template>
  <div id="main-container">

    <!-- Visão geral do produto -->
    <div class="product-container-div" id="product-overview-container">

        <!-- Imagens do produto -->
        <div id="product-overview-left-container">
            
            <!-- Mostrador esquerdo (visão das imagens disponíveis) -->
            <div id="product-overview-little-images-container">
                <div> <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image"> </div>
                <div> <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image"> </div>
                <div> <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image"> </div>
                <div> <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image"> </div>
            </div>

            <!-- Imagem de exibição -->
            <div id="product-overview-image-container">
                <img src="../assets/icons/arrow-left.svg" alt="previous image" class="product-arrow-image" id="product-previous-image-button">
                <div id="product-current-display-image-container">
                    <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image" id="product-current-display-image">
                </div>
                <img src="../assets/icons/arrow-right.svg" alt="next image" class="product-arrow-image" id="product-next-image-button">
            </div>

        </div>

        <!-- Seção direita -->
        <div id="product-overview-right-container">
            
            <!-- Avaliação e informações básicas -->
            <div class="product-bordered-container">

                <!-- Avaliação -->
                <div id="product-review-container">
                    <img src="../assets/icons/star.svg" alt="product's review" class="product-review-image">
                    <img src="../assets/icons/star.svg" alt="product's review" class="product-review-image">
                    <img src="../assets/icons/star.svg" alt="product's review" class="product-review-image">
                    <img src="../assets/icons/star.svg" alt="product's review" class="product-review-image">
                    <img src="../assets/icons/star.svg" alt="product's review" class="product-review-image">
                </div>

                <!-- Título e informações -->
                <div id="product-overview-info">
                    <h2 id="product-title"> Useless Git Commit Messages </h2>
                    <table>
                        <tr>
                            <td class="text-darker-color">Autor:</td>
                            <td class="text-common-color" id="product-spec-author">@ThePracticalDev</td>
                        </tr>
                        <tr>
                            <td class="text-darker-color">Editora:</td>
                            <td class="text-common-color" id="product-spec-publisher">O RLY?</td>
                        </tr>
                    </table>
                </div>
            
            </div>

            <!-- Compra -->
            <div id="product-purchase-container" class="product-bordered-container">
                <h3 id="product-price"> R$ 89,90 </h3>
                <p id="product-price-alternative"> Ou em até 10x de R$ 8,90. </p>
                <button id="product-purchase-button" onclick="window.location.href='./cart.html'"> COMPRAR </button>
            </div>

            <!-- Frete -->
            <div id="product-shipping-container" class="product-bordered-container">
                <p class="text-darker-color"> Calcule o frete e o prazo de entrega: </p>
                <input type="text" placeholder="_____ - ___" id="product-shipping-input">
                <button id="product-shipping-button"> Consultar </button>
            </div>

        </div>

    </div>

    <!-- Descrição do produto -->
    <div id="product-description-container" class="product-container-div product-bordered-container">
        <h3 class="product-subtitle"> Descrição </h3>
        <p id="product-description" class="text-common-color text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ex imperdiet, pellentesque augue nec, interdum massa. Vivamus sed fringilla ex. Mauris tempus felis ut orci cursus, eget congue enim ornare. Phasellus eget dignissim lectus, eu congue nibh. Morbi venenatis ac odio sit amet ultrices. Praesent tempus porttitor tortor in molestie. Donec condimentum augue non leo pharetra lacinia. Mauris vitae consequat ex. Nam vitae ultricies nisl. Etiam vel neque malesuada purus ultrices posuere sed a ante. Morbi lobortis malesuada dolor id gravida. Pellentesque vitae bibendum mi. Duis hendrerit nunc cursus, iaculis urna quis, egestas augue. Praesent volutpat eros at ex aliquet mollis. Nam scelerisque metus vitae nulla ultrices vestibulum. Ut pretium enim leo, sed vulputate tellus ultricies nec.
        </p>
    </div>

    <!-- Características adicionais do produto -->
    <div id="product-specs-container" class="product-container-div product-bordered-container">
        <h3 class="product-subtitle"> Características </h3>
        <table class="text-common-color">
            <tr> 
                <td>Acabamento</td>
                <td id="product-spec-finish">Brochura</td>
            </tr>
            <tr> 
                <td>Ano da edição</td>
                <td id="product-spec-edition">2009</td>
            </tr>
            <tr> 
                <td>Idioma</td>
                <td id="product-spec-language">Latim</td>
            </tr>
            <tr> 
                <td>Número de páginas</td>
                <td id="product-spec-pages">309</td>
            </tr>
        </table>
    </div>
  </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
export default {
  name: 'ProductPage',
}
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* **************** GERAIS **************** */

    :root {
        --product-box-border: 1px groove rgba(190, 190, 190, 0.9);
    }

    /* Divisão de itens */
    .product-container-div {
        width: 90%;
        height: auto;
    }

    /* Contêineres com borda */
    .product-bordered-container {
        padding: 1rem;
        border: var(--product-box-border);
        border-radius: 5px;
    }

    /* Texto de subtítulo */
    .product-subtitle {
        font-size: 2rem; 
        color: var(--text-color);
    }


    /* **************** VISÃO GERAL DO PRODUTO: SEÇÃO ESQUERDA **************** */

    /* Adição de espaçamento superior */
    #product-overview-container {
        margin-top: 8vh;
    }

    /* Contêiner esquerdo */
    #product-overview-left-container {
        width: 45%;
        height: auto;
        float: left;
    }

    /* Mostrador das imagens disponíveis */
    #product-overview-little-images-container {
        width: 20%;
        max-height: 48vh;
        float: left;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 3vh;
    }

    /* Mostrador de uma imagem disponível */
    #product-overview-little-images-container div {
        width: 100%;
        box-shadow: var(--inner-box-shadow);
    }

    /* Imagem de exibição disponível */
    #product-overview-little-images-container img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: -1;
    }

    /* Mostrador da imagem de exibição */
    #product-overview-image-container {
        width: 80%;
        float: right;
        display: flex;
        align-items: center;
    }

    /* Seta para mudança de imagem */
    .product-arrow-image {
        width: 15%;
        height: auto;
        filter: brightness(70%);
        z-index: -1;
    }

    /* Contêiner da imagem de exibição atual */
    #product-current-display-image-container {
        width: 70%;
        box-shadow: var(--inner-box-shadow);
    }

    /* Imagem de exibição atual */
    #product-current-display-image {
        width: 100%;
        height: auto;
        position: relative;
        z-index: -1;
    }


    /* **************** VISÃO GERAL DO PRODUTO: SEÇÃO DIREITA **************** */

    /* Contêiner direito */
    #product-overview-right-container {
        width: 55%;
        height: auto;
        float: right;
    }

    /* Avaliação do produto */
    #product-review-container {
        width: 15%;
        display: inline-flex;
        margin-bottom: 0.5rem;
    }

    /* Estrela de avaliação */
    .product-review-image {
        width: 20%;
        height: auto;
    }

    /* Texto de Título */
    #product-title {
        font-size: 2.5rem; 
        color: var(--text-darker-color);
    }

    /* Tabela de informações de autor e de editora */
    #product-overview-info table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 1rem;
    }

    /* Redução de cobertura de largura */
    #product-spec-author, #product-spec-publisher {
        width: 90%;
    }

    /* Contêiner da seção de compra */
    #product-purchase-container {
        margin-top: 4vh;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Preço do título */
    #product-price {
        margin-bottom: 0.2rem;
        color: rgb(38, 38, 177);
        font-size: 2.4rem;
    }

    /* Texto alternativo do preço */
    #product-price-alternative {
        color: var(--text-color);
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    /* Botão de compra */
    #product-purchase-button {
        width: 40%;
        height: 3.6rem;
        background-color: var(--foreground-color);
        color: antiquewhite;
        text-transform: uppercase;
        font-size: 1.8rem;
        border-radius: 4px;
        border: none;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    #product-purchase-button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }


    /* Contêiner da calculadora de frete */
    #product-shipping-container {
        margin-top: 4vh;
        background-color: rgb(210, 210, 210);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    /* Entrada para inserção do CEP */
    #product-shipping-input {
        height: 2rem;
        border-radius: 5px;
        border: var(--product-box-border);
        box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.281);
    }

    /* Botão da calculadora de frete */
    #product-shipping-button {
        width: 20%;
        height: 2rem;
        background-color: rgb(187, 42, 73);
        color: antiquewhite;
        text-transform: uppercase;
        border-radius: 5px;
        border: none;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    #product-shipping-button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }


    /* **************** DESCRIÇÃO DO PRODUTO **************** */

    /* Contêiner */
    #product-description-container {
        margin-top: 4vh;
    }

    /* Texto da descrição */
    #product-description-container p {
        padding-top: 1rem;
    }


    /* **************** ESPECIFICAÇÕES DO PRODUTO **************** */

    /* Contêiner */
    #product-specs-container {
        margin-top: 4vh;
    }

    /* Tabela de especificações */
    #product-specs-container table {
        width: 100%;
    }

    /* Linha da tabela de especificações */
    #product-specs-container tr {
        border-bottom: var(--product-box-border);
        margin-bottom: 1rem;
    }

    /* Item da tabela de especificações */
    #product-specs-container td {
        padding-top: 1rem;
    }
</style>