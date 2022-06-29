"use strict"

// Para manipulação de armazenamento local
import { 
    load_local_storage_books, 
    load_local_storage_categories, 
    load_local_storage_credit_cards, 
    load_local_storage_delivery_addresses, 
    load_local_storage_has_category, 
    load_local_storage_users 
} from "./local-storage-management.js";


// Para cacheamento de dados
let products = null;
let users = null;
let credit_cards = null;
let delivery_addresses = null;
let categories = null;
let product_categories = null;


///////// .:::: USER ::::. //////////

// Retorna todos os usuários
export async function select_all_users() {
    if(users == null) {
        await load_local_storage_users().then(res => {
            users = res;
        });
    }
    return users;
}


// Retorna o usuário especificado
export async function select_user(id) {
    if(users == null) {
        await select_all_users();
    }
    return users.find(user => {
        return user.id == id;
    });
}


///////// .:::: CREDIT CARD ::::. //////////

// Retorna todos os cartões de crédito
export async function select_all_credit_cards() {
    if(credit_cards == null) {
        await load_local_storage_credit_cards().then(res => {
            credit_cards = res;
        });
    }
    return credit_cards;
}


// Retorna o cartão de crédito especificado
export async function select_credit_card(user_id, card_number) {
    if(credit_cards == null){
        await select_all_credit_cards();
    }
    return credit_cards.find(card => {
        return (card.user == user_id && card.number == card_number);
    });
}


///////// .:::: DELIVERY ADDRESS ::::. //////////

// Retorna todos os endereços de entrega
export async function select_all_delivery_addresses() {
    if(delivery_addresses == null) {
        await load_local_storage_delivery_addresses().then(res => {
            delivery_addresses = res;
        });
    }
    return delivery_addresses;
}


// Retorna o endereço de entrega especificado
export async function select_delivery_address(user_id, address_zip) {
    if(delivery_addresses == null) {
        await select_all_delivery_addresses();
    }
    return delivery_addresses.find(address => {
        return (address.user == user_id && address.zip == address_zip);
    });
}


///////// .:::: RATES ::::. //////////


///////// .:::: SHOPPING CART ::::. //////////


///////// .:::: CART PRODUCT ::::. //////////


///////// .:::: PRODUCT ::::. //////////

// Retorna todos os livros
export async function select_all_products() {
    if(products == null){
        await load_local_storage_books().then(res => {
            products = res;
        });
    }
    return products;
}

// Retorna o produto especificado
export async function select_product(id) {
    if(products == null) {
        await select_all_products();
    }
    return products.find(product => {
        return product.id == id;
    });
}


///////// .:::: PRODUCT PHOTO ::::. //////////


///////// .:::: CATEGORY ::::. //////////

// Retorna todas as categorias
export async function select_all_categories() {
    if(categories == null) {
        await load_local_storage_categories().then(res => {
            categories = res;
        });
    }
    return categories;
}


// Retorna a categoria especificada
export async function select_category(id) {
    if(categories == null) {
        await select_all_categories();
    }
    return categories.find(category => {
        return category.id == id;
    });
}


///////// .:::: PRODUCT CATEGORY ::::. //////////

// Retorna todas as categorias dos produtos
export async function select_all_product_categories() {
    if(product_categories == null) {
        await load_local_storage_has_category().then(res => {
            product_categories = res;
        });
    }
    return product_categories;
}


// Retorna todas as categorias do produto especificado
export async function select_product_categories(product_id) {
    if(product_categories == null) {
        await select_all_product_categories();
    }
    return product_categories.filter(pc => {
        return pc.product == product_id;
    });
}