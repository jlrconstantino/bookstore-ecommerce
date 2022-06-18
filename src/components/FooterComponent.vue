<!-- .:::: TEMPLATE ::::. -->
<template>
  <div id="footer-container">
    <footer>

        <!-- Barra de separação -->
        <div id="footer-top-bar">

            <!-- Facebook -->
            <div class="footer-social-media-container">
                <img class="footer-social-media-img" src="../assets/icons/facebook.svg">
                <p class="text-center footer-social-media-text"> @facebook </p>
            </div>

            <!-- Instagram -->
            <div class="footer-social-media-container">
                <img class="footer-social-media-img" src="../assets/icons/instagram.svg">
                <p class="text-center footer-social-media-text"> @instagram </p>
            </div>

            <!-- Twitter -->
            <div class="footer-social-media-container">
                <img class="footer-social-media-img" src="../assets/icons/twitter.svg">
                <p class="text-center footer-social-media-text"> @twitter </p>
            </div>
            
        </div>

        <!-- Conteúdo adicional -->
        <div id="footer-bot-bar">

            <!-- Logo -->
            <div>
                <a href="index.html" class="no-style-link">
                    <h3 id="footer-bot-bar-title" class="footer-bot-bar-text"> Título </h3>
                </a>
            </div>

            <!-- Informativo -->
            <div>
                <p class="footer-bot-bar-text"> © Todos os direitos reservados. </p>
            </div>

        </div>

    </footer>
  </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>
    export default {
        name: 'FooterComponent',
    }
</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/colors.css";

    /* **************** AJUSTE DE POSICIONAMENTO DO HEADER **************** */

    /* Contêiner da barra de navegação */
    #footer-container {
        padding-top: 8vh;
        width: 100%;
        left: 0;
        bottom: 0;
        overflow: hidden;
    }


    /* **************** SEÇÃO SUPERIOR DO HEADER **************** */

    /* Seção superior da barra de navegação */
    #footer-top-bar {
        padding: 1rem 1rem;
        width: 100%;
        max-height: 5vh;
        background-color: var(--foreground-color);
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
    }

    /* Contêiner de mídia social */
    .footer-social-media-container {
        width: 30vw;
        height: 4vh;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    /* Ícone da mídia social */
    .footer-social-media-img {
        height: 100%;
        width: auto;
        filter: contrast(0) brightness(100);
        margin-right: 0.5vw;
    }

    /* Texto da mídia social */
    .footer-social-media-text {
        height: 100%;
        font-size: 3vh;
        color: antiquewhite;
    }


    /* **************** SEÇÃO INFERIOR DO HEADER **************** */

    /* Seção inferior da barra de navegação */
    #footer-bot-bar {
        padding: 1rem 1rem;
        width: 100%;
        max-height: 12vh;
        background-color: var(--footer-color);
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
    }

    /* Divisões */
    #footer-bot-bar div {
        justify-content: baseline;
        align-items: center;
        width: 30vw;
        height: 8vh;
    }

    /* Texto do título */
    #footer-bot-bar-title {
        height: 100%;
        font-size: 5vh;

        /* MEDIDA TEMPORÁRIA: REMOVER POSTERIORMENTE */
        margin-left: 24vw;
    }

    /* Texto de rodapé */
    .footer-bot-bar-text {
        font: 4vh;
        color: var(--text-color);

        /* MEDIDA TEMPORÁRIA: REMOVER POSTERIORMENTE */
        margin-right: 12vw;
    }
</style>