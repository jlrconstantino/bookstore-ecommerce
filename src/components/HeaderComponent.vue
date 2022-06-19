<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="header-container">
        <header>

            <!-- Barra fixa superior -->
            <div id="header-top-bar"> 

                <!-- Título -->
                <div id="header-top-bar-title">
                    <img @click="go_to_page('homepage')" src="../assets/logo/logo.png" class="header-top-bar-img" id="header-logo-img">
                </div>

                <!-- Campo de busca textual -->
                <div id="header-top-bar-search">
                    <input @keyup.enter="search_by_title(search_string)" v-model="search_string" type="text" placeholder="O que você procura?" id="header-searcher">
                </div>

                <!-- Perfil -->
                <div id="header-top-bar-user">
                    <img src="../assets/icons/user-circle.svg" class="header-top-bar-img" id="header-top-bar-user-img">
                    <div id="header-top-bar-user-text-container">
                        <p v-if="logged===false" class="header-top-bar-text header-top-bar-user-p1">Olá, bem-vindo(a)!</p>
                        <p v-if="logged===false" class="hover-interaction-link-alternative header-top-bar-text header-top-bar-user-p2">Entre ou cadastre-se</p>
                        <p v-if="logged===true" class="hover-interaction-link-alternative header-top-bar-text header-top-bar-user-p1">Usuário</p>
                    </div>
                </div>

                <!-- Carrinho -->
                <div id="header-top-bar-shop">
                    <img @click="go_to_page('cart')" src="../assets/icons/shopping-bag.svg" class="header-top-bar-img" id="header-top-bar-cart-img">
                </div>

            </div>

            <!-- Barra fixa inferior -->
            <div class="header-bottom-bar" :class="{ 'header-bottom-bar--hidden': !show_bottom_bar }">
                
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

    // Lógica local
    export default {

        // Nome do componente
        name: 'HeaderComponent',

        // Dados locais
        data() {
            return {
                search_string: "", 
                logged: false, 
                show_bottom_bar: true, 
                last_scroll_position: 0, 
            };
        }, 

        // Para escutar eventos de rolagem
        mounted () {
            window.addEventListener('scroll', this.on_scroll)
        },
        beforeUnmount () {
            window.removeEventListener('scroll', this.on_scroll)
        },

        // Métodos auxiliares
        methods: {

            // Navegação
            go_to_page(name) {
                this.$router.push({name: name});
                window.scrollTo(0,0);
            }, 

            // Pesquisa
            search_by_title(str) {
                this.$router.push({name: "search", query: {target: str}});
                window.scrollTo(0,0);
            }, 

            // Rolagem
            on_scroll() {

                // Posição atual
                const current_scroll_position = window.pageYOffset || document.documentElement.scrollTop;

                // Verificação e atualização
                if (Math.abs(this.last_scroll_position - current_scroll_position) > 80) {
                    this.show_bottom_bar = current_scroll_position < this.last_scroll_position;
                    this.last_scroll_position = current_scroll_position;
                }
            },
        }
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* **************** AJUSTE DE POSICIONAMENTO DO HEADER **************** */

    /* Contêiner da barra de navegação */
    #header-container {
        top: 0;
        position: fixed;
        min-height: 20%;
        height: 20%;
        max-height: 20%;
        width: 100%;
    }

    header {
        width: 100%;
        height: 100%;
    }


    /* **************** SEÇÃO SUPERIOR DO HEADER **************** */

    /* Seção superior da barra de navegação */
    #header-top-bar {
        padding: 1rem 1rem;
        width: 100%;
        height: 60%;
        max-height: 60%;
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        background-color: var(--foreground-color);
        display: flex;
        overflow: hidden;
        justify-content: space-around;
        align-items: center;
        box-shadow: var(--box-shadow);
    }

    /* Imagens para a barra superior */
    .header-top-bar-img {
        height: 100%;/*6vh;*/
        width: auto;
        filter: brightness(0) invert(1);
    }
    .header-top-bar-img:hover {
        filter: brightness(0) invert(1) drop-shadow(4px 4px 8px #afc8d6);;
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
        width: 42%;
        height: 66%;
        justify-content: center;
        display: flex;
    }

    /* Caixa de pesquisa */
    #header-searcher {
        justify-content: baseline;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: var(--header-searcher-background-color);
        border: var(--header-searcher-border);
        box-shadow: var(--box-shadow-minimized);
        padding-left: 1rem;
    }


    /* Seção para o status de usuário */
    #header-top-bar-user {
        width: 18%;
        justify-content: safe center;
        display: flex;
        align-items: center;
        gap: 8px;
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
    .header-top-bar-user-p1 {justify-content: flex-start;}
    .header-top-bar-user-p2 {justify-content: flex-end;}


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
    .header-bottom-bar {
        width: 100%;
        height: 40%;
        position: absolute;
        top: calc(60% + 2rem);
        z-index: 0;
        background-color: var(--header-bottom-bar-background-color);
        box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.281);
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;
    }
    .header-bottom-bar--hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
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