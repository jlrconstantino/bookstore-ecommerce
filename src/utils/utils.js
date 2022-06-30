"use strict"

// Formata um valor numérico para representação em reais
export function format_number_to_price(price) {
    return "R$ " + parseFloat(price).toFixed(2).replace('.', ',');
}