"use strict"

// Formata um valor numérico para representação em reais
export function format_number_to_price(price) {
    return "R$ " + parseFloat(price).toFixed(2).replace('.', ',');
}

// Gera um inteiro aleatório no intervalo [0,max]
export function get_random_integer(max) {
    return Math.floor(Math.random() * max) + 1;
}

/* eslint-disable */

// Parser de Regex numérico
export const numeric_parser = new RegExp("^[0-9]+$", "g");

// Parser de Regex alfanumérico
export const alphanumeric_parser = new RegExp("^[a-zA-ZÀ-ú0-9\- ]+$", "u");

// Parser de texto
export const text_parser = new RegExp("^[a-zA-ZÀ-ú0-9\-\_/,. ]+$", "u");

// Parser de Regex para e-mails
export const email_parser = new RegExp("^([a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)$", "g");

// Parser de Regex para datas de nascimento
export const birth_date_parser = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", "g");

/* eslint-enable */