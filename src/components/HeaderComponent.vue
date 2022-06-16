<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="header-container">
        <header>

            <!-- Barra fixa superior -->
            <div id="header-top-bar"> 

                <!-- Título -->
                <div id="header-top-bar-title">
                    <img src="../assets/logo/logo.png" class="header-top-bar-img" id="header-logo-img">
                </div>

                <!-- Campo de busca textual -->
                <div id="header-top-bar-search">
                    <input type="text" placeholder="O que você procura?" id="header-searcher">
                    <div id="header-top-bar-search-img-container">
                        <img src="../assets/icons/search.svg" class="header-top-bar-img" id="header-top-bar-search-img">
                    </div>
                </div>

                <!-- Perfil -->
                <div id="header-top-bar-user">
                    <img src="../assets/icons/user-circle.svg" class="header-top-bar-img" id="header-top-bar-user-img">
                    <div id="header-top-bar-user-text-container">
                        <p class="header-top-bar-text" id="header-top-bar-user-p1"> Olá, bem-vindo(a)! </p>
                        <p class="header-top-bar-text" id="header-top-bar-user-p2"> Entre ou cadastre-se </p>
                    </div>
                </div>

                <!-- Carrinho -->
                <div id="header-top-bar-shop">
                    <img src="../assets/icons/shopping-bag.svg" class="header-top-bar-img" id="header-top-bar-cart-img">
                </div>

            </div>

            <!-- Barra fixa inferior -->
            <div id="header-bottom-bar">
                
                <!-- Listagem de categorias -->
                <div id="header-bot-bar-categories"> 
                    <a href="" class="hover-interaction-link header-bot-bar-text"> Categorias </a>
                </div>

                <!-- Mais vendidos -->
                <div class="header-bot-bar-item">
                    <a href="" class="hover-interaction-link header-bot-bar-text"> Mais vendidos </a>
                </div>

                <!-- Promoções -->
                <div class="header-bot-bar-item">
                    <a href="" class="hover-interaction-link header-bot-bar-text"> Promoções </a>
                </div>

                <!-- Lançamentos -->
                <div class="header-bot-bar-item">
                    <a href="" class="hover-interaction-link header-bot-bar-text"> Lançamentos </a>
                </div>

                <!-- Infantil -->
                <div class="header-bot-bar-item">
                    <a href="" class="hover-interaction-link header-bot-bar-text"> Infantil </a>
                </div>

            </div>

        </header>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
export default {
  name: 'HeaderComponent',
}
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* **************** AJUSTE DE POSICIONAMENTO DO HEADER **************** */

    /* Contêiner da barra de navegação */
    #header-container {
        height: 24vh;
    }

    header {
        position: fixed;
        width: 100%;
        top: 0;
    }


    /* **************** SEÇÃO SUPERIOR DO HEADER **************** */

    /* Seção superior da barra de navegação */
    #header-top-bar {
        padding: 1rem 1rem;
        width: 100%;
        height: 12vh;
        background-color: var(--foreground-color);
        display: flex;
        overflow: hidden;
        justify-content: space-around;
        align-items: center;
        box-shadow: var(--box-shadow);
    }

    /* Imagens para a barra superior */
    .header-top-bar-img {
        height: 6vh;
        width: auto;
        filter: brightness(0) invert(1);
    }


    /* Seção esquerda da barra superior */
    #header-top-bar-title {
        justify-content: flex-start;
        width: auto;
        overflow: hidden;
    }

    /* Imagem de logo */
    #header-logo-img {
        height: 14vh;
        width: auto;
    }

    /* Coloração do texto */
    .header-top-bar-text {
        color: var(--header-top-bar-text-color);
    }


    /* Seção central da barra superior */
    #header-top-bar-search {
        width: 40%;
        justify-content: center;
        display: flex;
    }

    /* Caixa de pesquisa */
    #header-searcher {
        justify-content: baseline;
        width: 95%;
        height: 5vh;
        background-color: var(--header-searcher-background-color);
        border: var(--header-searcher-border);
    }

    /* Posiciona a imagem de pesquisa */
    #header-top-bar-search-img-container {
        justify-content: baseline;
        width: 5%;
        height: 5vh;
        background-color: var(--header-searcher-background-color);
        border: var(--header-searcher-border);
    }

    /* Imagem para a pesquisa */
    #header-top-bar-search-img {
        width: 100%;
        height: 5vh;
        filter: brightness(0%);
    }


    /* Seção para o status de usuário */
    #header-top-bar-user {
        width: 20%;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    /* Imagem para o usuário */
    #header-top-bar-user-img {
        height: 6vh;
        justify-content: flex-start;
    }

    /* Contêiner dos elementos textuais */
    #header-top-bar-user-text-container {
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
    }

    /* Ajuste de posição dos textos */
    #header-top-bar-user-p1 {justify-content: flex-start;}
    #header-top-bar-user-p2 {justify-content: flex-end;}


    /* Seção direita da barra superior */
    #header-top-bar-shop {
        width: 10%;
        justify-content: flex-end;
    }

    /* Imagem para o carrinho */
    #header-top-bar-cart-img {
        height: 6vh;
    }



    /* **************** SEÇÃO INFERIOR DO HEADER **************** */

    /* Seção inferior da barra de navegação */
    #header-bottom-bar {
        padding: 1rem 1rem;
        width: 100%;
        max-height: 6vh;
        background-color: var(--header-bottom-bar-background-color);
        box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.281);
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }

    /* Itens com links */
    .header-bot-bar-item {
        justify-content: baseline;
    }

    /* Coloração do texto */
    .header-bot-bar-text {
        color: var(--header-bottom-bar-text-color);
    }
</style>