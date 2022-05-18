"use strict"

// Carregadores de conteúdo
import { load_header, load_footer, load_main_container } from "./element-loaders.js";

// Espera pelo carregamento do DOM
window.onload = function(){

    // Corpo da página
    const body = document.getElementsByTagName("body")[0]

    // Elementos principais
    const header = load_header()
    const footer = load_footer()
    const main = load_main_container()

    // Construção da página-base
    body.appendChild(header)
    body.appendChild(main)
    body.appendChild(footer)

    
}