"use strict"

// Formata um valor numérico para representação em reais
export function format_number_to_price(price) {
    return "R$ " + parseFloat(price).toFixed(2).replace('.', ',');
}

// Gera um inteiro aleatório no intervalo [0,max]
export function get_random_integer(max) {
    return Math.floor(Math.random() * max) + 1;
}