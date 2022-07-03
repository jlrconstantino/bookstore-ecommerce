"use strict"

// Formata um valor numérico para representação em reais
export function format_number_to_price(price) {
    return "R$ " + parseFloat(price).toFixed(2).replace('.', ',');
}

/* eslint-disable */

// Parser de Regex alfanumérico
export const alphanumeric_parser = new RegExp("^[a-zA-ZÀ-ú0-9\- ]+$", "u");

// Parser de Regex para e-mails
export const email_parser = new RegExp("^([a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)$", "g");

// Parser de Regex para datas de nascimento
export const birth_date_parser = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", "g");

/* eslint-enable */