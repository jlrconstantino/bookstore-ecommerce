<!-- .:::: TEMPLATE ::::. -->
<template>
  <div id="main-container">
    
    <!-- Título da página -->
    <div id="cart-title-container">
        <h2 class="subtitle"> Meu Carrinho </h2>
    </div>

    <!-- Divisão para quantidade e preço -->
    <div id="cart-quantity-and-price-container" class="cart-container-div cart-bordered-container">
        <h3 class="cart-header-info"> Quantidade </h3>
        <h3 class="cart-header-info"> Preço </h3>
    </div>

    <!-- Divisão para o item de compra -->
    <div class="cart-item-container cart-container-div cart-bordered-container">

        <!-- Imagem do item -->
        <div class="cart-item-image-container">
            <img src="../assets/sample-books/commit_messages.jpeg" alt="product's image" class="cart-item-image">
        </div>

        <!-- Descrição do item -->
        <div class="cart-item-info-container">
            <h4 class="cart-item-title text-darker-color"> Useless Git Commit Messages </h4>
            <table>
                <tr>
                    <td class="text-darker-color"> Autor: </td>
                    <td class="text-common-color cart-item-author"> @ThePracticalDev </td>
                </tr>
                <tr>
                    <td class="text-darker-color"> Editora: </td>
                    <td class="text-common-color cart-item-publisher"> O RLY? </td>
                </tr>
                <tr>
                    <td class="text-darker-color"> Edição: </td>
                    <td class="text-common-color cart-item-edition"> 2009 </td>
                </tr>
            </table>
        </div>

        <!-- Quantidade do item -->
        <input type="number" value="1" min="1" max="10" name="item-quantity" class="cart-item-quantity text-center">

        <!-- Preço do item -->
        <h5 class="cart-item-price text-darker-color"> R$ 89,90 </h5>

    </div>

    <!-- Divisão para o frete e o subtotal -->
    <div id="cart-shipping-and-total-container" class="cart-container-div">
        
        <!-- Frete -->
        <div id="cart-shipping-container">
            <div>
                <p class="text-darker-color"> Calcule o frete e o prazo de entrega: </p>
            </div>
            <div>
                <input type="text" placeholder="_____ - ___" id="product-shipping-input">
                <button id="product-shipping-button"> Consultar </button>
            </div>
        </div>

        <!-- total -->
        <div id="cart-total-container">
            <div class="cart-bordered-container">
                <table>
                    <tr>
                        <td class="text-darker-color"> Subtotal: </td>
                        <td class="text-common-color cart-subtotal-value"> R$ 89,90 </td>
                    </tr>
                    <tr>
                        <td class="text-darker-color"> Frete: </td>
                        <td class="text-common-color cart-shipping-value"> R$ 0,00 </td>
                    </tr>
                </table>
            </div>
            <table>
                <tr>
                    <td class="text-darker-color"> Total: </td>
                    <td class="text-common-color cart-total-value"> R$ 89,90 </td>
                </tr>
            </table>
        </div>

    </div>

    <!-- Divisão para compra -->
    <div class="cart-container-div" id="cart-purchase-container">
        <a> Comprar mais produtos </a>
        <button id="cart-purchase-button"> FINALIZAR COMPRA </button>
    </div>
  </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
export default {
  name: 'CartPage',
}
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* **************** GERAIS **************** */

    /* Regras gerais para os contêineres */
    .cart-container-div {
        width: 90%;
        height: auto;
    }

    /* Contêineres com borda inferior */
    .cart-bordered-container {
        border-bottom: 1px groove rgba(190, 190, 190, 0.9);
        padding-bottom: 0.5rem;
    }


    /* **************** TÍTULO **************** */

    /* Alinha o título à esquerda */
    #cart-title-container {
        width: 90%;
        height: auto;
        float: left;
    }


    /* **************** QUANTIDADE E PREÇO **************** */

    /* Contêiner dos textos flutuantes */
    #cart-quantity-and-price-container {
        display: inline-flex;
        align-items: center;
        justify-content: end;
    }

    /* Textos flutuantes */
    .cart-header-info {
        font-size: 1.8rem;
        padding-right: 17.5%;
        color: var(--text-color);
    }


    /* **************** ITEM DE COMPRA **************** */

    /* Contêiner de um item */
    .cart-item-container {
        display: flex;
        justify-content: flex-start;
        padding: 2rem 0;
        max-height: 55vh;
        overflow: hidden;
    }

    /* Contêiner da imagem do item */
    .cart-item-image-container {
        width: 22%;
        box-shadow: var(--inner-box-shadow);
    }

    /* Imagem do item */
    .cart-item-image {
        width: 100%;
        height: auto;
        position: relative;
        z-index: -1;
    }

    /* Contêiner das informações básicas do item */
    .cart-item-info-container {
        margin-left: 2%;
        width: 24%;
        overflow-wrap: break-word;
    }

    /* Título do item */
    .cart-item-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    /* Tabela de informações básicas */
    .cart-item-info-container table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0.5rem 0.5rem;
    }

    /* Redução de cobertura de largura */
    .cart-item-author, .cart-item-publisher, .cart-item-edition {
        width: 80%;
    }

    /* Seletor de quantidade */
    .cart-item-quantity {
        color: var(--text-color);
        border-radius: 5px;
        width: 8%;
        height: 20%;
        margin-left: 1%;
    }
    .cart-item-quantity::-webkit-inner-spin-button, .cart-item-quantity::-webkit-outer-spin-button {  
    opacity: 1;
    }

    /* Preço */
    .cart-item-price {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 18%;
        width: 10%;
    }


    /* **************** FRETE E TOTAL **************** */

    /* Para obter margem */
    #cart-shipping-and-total-container {
        margin-top: 2vh;
    }

    /* Contêiner para o cálculo de frete */
    #cart-shipping-container {
        width: 50%;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
    }

    /* Adição de margem inferior ao texto */
    #cart-shipping-container p {
        margin-bottom: 1rem;
    }

    /* Entrada do CEP */
    #cart-shipping-container input {
        height: 2rem;
        border-radius: 5px;
        border: 1px groove rgba(190, 190, 190, 0.9);
        box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.281);
        margin-right: 1rem;
    }

    /* Botão de consulta */
    #cart-shipping-container button {
        height: 2rem;
        background-color: rgb(187, 42, 73);
        color: antiquewhite;
        text-transform: uppercase;
        border-radius: 5px;
        border: none;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    #cart-shipping-container button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }

    /* Contêiner para o cálculo de subtotal */
    #cart-total-container {
        width: 50%;
        float: right;
    }

    /* Tabela de informações da compra */
    #cart-total-container table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0.5rem 0.5rem;
        font-size: 1.5rem;
    }

    /* Redução de cobertura de largura */
    .cart-subtotal-value, .cart-shipping-value, .cart-total-value {
        width: 50%;
    }

    /* Ênfase ao total */
    .cart-total-value {
        font-size: 1.8rem;
        color: black;
    }


    /* **************** COMPRA **************** */

    /* Contêiner para as opções de finalização de compra */
    #cart-purchase-container {
        margin-top: 4vh;
        float: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20%;
        gap: 2rem;
    }

    /* Link para compra de mais produtos */
    #cart-purchase-container a {
        font-size: 1.5rem;
        color: rgb(143, 31, 143);
    }

    /* Botão de finalização de compra */
    #cart-purchase-button {
        font-size: 1rem;
        width: 20%;
        height: 2.5rem;
        background-color: rgb(209, 143, 19);
        color: antiquewhite;
        text-transform: uppercase;
        border-radius: 10px;
        border: none;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    #cart-purchase-button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }

</style>