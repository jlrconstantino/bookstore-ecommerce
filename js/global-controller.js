"use strict"

// Carregadores de conteúdo
import { load_header, load_footer, load_first_page_content } from "./element-loaders.js";

// Espera pelo carregamento do DOM
window.onload = function(){

    // Corpo da página
    const body = document.getElementsByTagName("body")[0]

    // Elementos principais
    const header = load_header()
    const footer = load_footer()

    // Construção da página-base
    body.appendChild(header)
    body.appendChild(footer)

    // Página inicial
    const first_page_content = load_first_page_content()
    body.insertBefore(first_page_content, footer)
}