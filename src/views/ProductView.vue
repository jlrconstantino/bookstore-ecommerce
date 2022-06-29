<!-- .:::: TEMPLATE ::::. -->
<template>

    <!-- Visão geral do produto -->
    <div v-if="data_is_ready" class="product-container-div" id="product-overview-container">

        <!-- Imagens do produto -->
        <div id="product-overview-left-container">
            
            <!-- Mostrador esquerdo (visão das imagens disponíveis) -->
            <div id="product-overview-little-images-container">
                <div> <img :src="product.img_src" alt="product's image"> </div>
                <div> <img :src="product.img_src" alt="product's image"> </div>
            </div>

            <!-- Imagem de exibição -->
            <div id="product-overview-image-container">
                <img src="../assets/icons/arrow-left.svg" alt="previous image" class="product-arrow-image" id="product-previous-image-button">
                <div id="product-current-display-image-container">
                    <img :src="product.img_src" alt="product's image" id="product-current-display-image">
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
                    <img :src="rating_stars[0]" alt="product's review" class="product-review-image">
                    <img :src="rating_stars[1]" alt="product's review" class="product-review-image">
                    <img :src="rating_stars[2]" alt="product's review" class="product-review-image">
                    <img :src="rating_stars[3]" alt="product's review" class="product-review-image">
                    <img :src="rating_stars[4]" alt="product's review" class="product-review-image">
                    <p id="product-review-number-displayer">({{product.rating.toFixed(1)}})</p>
                </div>

                <!-- Título e informações -->
                <div id="product-overview-info">
                    <h2 id="product-title">{{product.title}}</h2>
                    <table>
                        <tr>
                            <td class="text-darker-color">Autor:</td>
                            <td class="text-common-color" id="product-spec-author">{{product.author}}</td>
                        </tr>
                        <tr>
                            <td class="text-darker-color">Editora:</td>
                            <td class="text-common-color" id="product-spec-publisher">{{product.publisher}}</td>
                        </tr>
                    </table>
                </div>
            
            </div>

            <!-- Compra -->
            <div id="product-purchase-container" class="product-bordered-container">
                <h3 id="product-price">{{format_price(product.price)}}</h3>
                <p id="product-price-alternative">{{format_price_installment(product.price, 8)}}</p>
                <button id="product-purchase-button" class="standard-button" @click="go_to_cart()"> COMPRAR </button>
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
        <p id="product-description" class="text-common-color text-justify">{{product.description}}</p>
    </div>

    <!-- Características adicionais do produto -->
    <div id="product-specs-container" class="product-container-div product-bordered-container">
        <h3 class="product-subtitle"> Características </h3>
        <table class="text-common-color">
            <tr> 
                <td>Acabamento</td>
                <td id="product-spec-finish">{{product.finishing}}</td>
            </tr>
            <tr> 
                <td>Ano da edição</td>
                <td id="product-spec-edition">{{product.year}}</td>
            </tr>
            <tr> 
                <td>Idioma</td>
                <td id="product-spec-language">{{product.language}}</td>
            </tr>
            <tr> 
                <td>Número de páginas</td>
                <td id="product-spec-pages">{{product.pages}}</td>
            </tr>
        </table>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Para importação da base de dados local
    import { get_item } from '@/utils/local-storage-management';

    // Lógica local
    export default {

        // Nome do componente para exportação
        name: 'ProductView', 

        // Dados locais
        data() {
            return {

                // Caminhos das estrelas
                full_star: null, 
                half_star: null, 
                null_star: null,

                // Produto
                product: {
                    id: 0, 
                    title: "", 
                    price: 0.0, 
                    rating: 0.0, 
                    author: "",
                    publisher: "",
                    finishing: "", 
                    year: 0, 
                    language: "", 
                    pages: 0, 
                    description: "",
                    img_src: require("@/assets/sample-books/404.jpg"),
                }, 
                
                // Para controle assíncrono
                data_is_ready: false, 
            };
        }, 

        // Obtenção dos caminhos das estrelas e do produto
        created() {
            this.full_star = require("@/assets/icons/full-star.svg");
            this.half_star = require("@/assets/icons/half-star.svg");
            this.null_star = require("@/assets/icons/null-star.svg");
            get_item("book#" + this.$route.params.id).then(res => {
                this.product = res;
                this.data_is_ready = true;
            });
        }, 

        // Métodos auxiliares
        methods: {
            format_price(price) {
                return "R$ " + price.toFixed(2).toString().replace('.', ',');
            }, 
            format_price_installment(price, installments) {
                return "Ou em até " + installments.toString() + "x de R$ " + (price/installments).toFixed(2).toString().replace('.', ',') + "."
            }, 
            go_to_cart() {
                this.$router.push({name: 'cart'});
                this.$store.commit("add_cart_item", this.$route.params.id);
                window.scrollTo(0,0);
            }, 
        },

        // Cômputo da avaliação do produto
        computed: {
            rating_stars: function(){
                let stars = [0, 0, 0, 0, 0];
                let rating = 5.0;
                if(this.product != null){
                    rating = this.product.rating;
                }
                let index = 0;
                while(rating >= 1.0) {
                    stars[index] = this.full_star;
                    rating -= 1.0;
                    index += 1;
                }
                if(rating >= 0.75){
                    stars[index] = this.full_star;
                    index += 1;
                }else if(rating >= 0.25){
                    stars[index] = this.half_star;
                    index += 1;
                }
                while(index < 5){
                    stars[index] = this.null_star;
                    index += 1;
                }
                return stars;
            }, 
        }, 
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";
    @import "../css/global-style.css";

    /* **************** GERAIS **************** */

    :root {
        --product-box-border: 1px groove rgba(190, 190, 190, 0.9);
    }

    /* Divisão de itens */
    .product-container-div {
        width: 80%;
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

    /* Mostrador numérico da avaliação */
    #product-review-number-displayer {
        color: var(--review-text-color);
        padding-left: 0.3rem;
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
        width: 87%;
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
        font-size: 1.8rem;
    }


    /* Contêiner da calculadora de frete */
    #product-shipping-container {
        margin-top: 4vh;
        background-color: rgb(210, 210, 210);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
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