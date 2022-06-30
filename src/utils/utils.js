"use strict"

// Formata um valor numérico para representação em reais
export function format_number_to_price(price) {
    return "R$ " + price.toFixed(2).toString().replace('.', ',');
}