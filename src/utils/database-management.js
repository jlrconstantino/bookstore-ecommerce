"use strict"

// Para manipulação de armazenamento local
import { 
    set_item, 
    delete_item, 
    load_local_storage_elements
} from "./local-storage-management.js";

// Para cacheamento de dados
let users = null;
let credit_cards = null;
let delivery_addresses = null;
let ratings = null;
let shopping_carts = null;
let cart_products = null;
let products = null;
let categories = null;
let product_categories = null;



///////// .:::: USER ::::. //////////

// Retorna todos os usuários
export async function select_all_users() {
    if(users == null) {
        await load_local_storage_elements("user#").then(res => {
            users = res;
        });
    }
    return users;
}


// Retorna o usuário especificado
export async function select_user_by_id(id) {
    if(users == null) {
        await select_all_users();
    }
    return users.find(user => {
        return user.id == id;
    });
}


// Retorna o usuário especificado
export async function select_user_by_email(email) {
    if(users == null) {
        await select_all_users();
    }
    return users.find(user => {
        return user.email == email;
    });
}


// Atualiza o usuário especificado
export async function update_user(user) {
    if(users == null){
        await select_all_users();
    }
    let index = users.findIndex(u => {
        return u.id == user.id;
    });
    if(index >= 0) {
        users[index] = user;
        set_item("user#" + index.toString(), user);
    }
}


// Adiciona o usuário especificado
export async function add_user(user) {

    // Validação da estrutura do usuário
    if(Object.prototype.hasOwnProperty.call(user, "id") === false){
        throw TypeError("user must have an 'id' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "email") === false){
        throw TypeError("user must have an 'email' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "name") === false){
        throw TypeError("user must have a 'name' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "password") === false){
        throw TypeError("user must have a 'password' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "phone_number") === false){
        throw TypeError("user must have a 'phone_number' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "birth_date") === false){
        throw TypeError("user must have a 'birth_date' property");
    }else if(Object.prototype.hasOwnProperty.call(user, "role") === false){
        throw TypeError("user must have a 'role' property");
    }

    // Adição do usuário à base de dados
    if(users == null) {
        await select_all_users();
    }
    set_item("user#" + users.length.toString(), user);
    users.push(user);
}


// Deleta o usuário especificado a partir do ID
export async function delete_user_by_id(id) {
    if(users != null){
        if(id < users.length && id >= 0){
            users.splice(id, 1);
            delete_item("user#" + id.toString());
        }
    }
    else{
        delete_item("user#" + id.toString());
    }
}


// Deleta o usuário especificado
export async function delete_user(user) {
    if(users == null) {
        await select_all_users();
    }
    let index = users.findIndex(u => {
        return u.id == user.id;
    });
    if(index >= 0){
        users.splice(index, 1);
        delete_item("user#" + index.toString());
    }
}



///////// .:::: CREDIT CARD ::::. //////////

// Retorna todos os cartões de crédito
export async function select_all_credit_cards() {
    if(credit_cards == null) {
        await load_local_storage_elements("credit_card#").then(res => {
            credit_cards = res;
        });
    }
    return credit_cards;
}


// Retorna todos os cartões de crédito do usuário especificado
export async function select_user_credit_cards(user_id) {
    if(credit_cards == null) {
        await select_all_credit_cards();
    }
    return credit_cards.filter(card => {
        return card.user == user_id;
    });
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


// Atualiza o endereço de entrega especificado
export async function update_credit_card(previous_number, credit_card) {
    if(credit_cards == null){
        await select_all_credit_cards();
    }
    let index = credit_cards.findIndex(cc => {
        return (
            cc.user == credit_card.user &&
            cc.number == previous_number
        );
    });
    if(index >= 0) {
        credit_cards[index] = credit_card;
        set_item("credit_card#" + index.toString(), credit_card);
    }
}


// Adiciona o cartão de crédito especificado
export async function add_credit_card(credit_card) {

    // Validação da estrutura do cartão de crédito
    if(Object.prototype.hasOwnProperty.call(credit_card, "user") === false){
        throw TypeError("credit_card must have an 'user' property");
    }else if(Object.prototype.hasOwnProperty.call(credit_card, "number") === false){
        throw TypeError("credit_card must have a 'number' property");
    }else if(Object.prototype.hasOwnProperty.call(credit_card, "title") === false){
        throw TypeError("credit_card must have a 'title' property");
    }else if(Object.prototype.hasOwnProperty.call(credit_card, "security_code") === false){
        throw TypeError("credit_card must have a 'security_code' property");
    }else if(Object.prototype.hasOwnProperty.call(credit_card, "cardholder") === false){
        throw TypeError("credit_card must have a 'cardholder' property");
    }else if(Object.prototype.hasOwnProperty.call(credit_card, "expiration_date") === false){
        throw TypeError("credit_card must have a 'expiration_date' property");
    }

    // Adição do cartão de crédito à base de dados
    if(credit_cards == null) {
        await select_all_credit_cards();
    }
    set_item("credit_card#" + credit_cards.length.toString(), credit_card);
    credit_cards.push(credit_card);
}


// Deleta o cartão de crédito especificado a partir do ID
export async function delete_credit_card_by_id(id) {
    if(credit_cards != null){
        if(id < credit_cards.length && id >= 0){
            credit_cards.splice(id, 1);
            delete_item("credit_card#" + id.toString());
        }
    }
    else{
        delete_item("credit_card#" + id.toString());
    }
}


// Deleta o cartão de crédito especificado
export async function delete_credit_card(user_id, credit_card_number) {
    if(credit_cards == null){
        await select_all_credit_cards();
    }
    let index = credit_cards.findIndex(cc => {
        return (
            cc.user == user_id && 
            cc.number == credit_card_number
        );
    });
    if(index >= 0) {
        credit_cards.splice(index, 1);
        delete_item("credit_card#" + index.toString());
    }
}



///////// .:::: DELIVERY ADDRESS ::::. //////////

// Retorna todos os endereços de entrega
export async function select_all_delivery_addresses() {
    if(delivery_addresses == null) {
        await load_local_storage_elements("delivery_address#").then(res => {
            delivery_addresses = res;
        });
    }
    return delivery_addresses;
}


// Retorna todos os endereços de entrega do usuário especificado
export async function select_user_delivery_addresses(user_id) {
    if(delivery_addresses == null) {
        await select_all_delivery_addresses();
    }
    return delivery_addresses.filter(address => {
        return address.user == user_id;
    });
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


// Atualiza o cartão de crédito especificado
export async function update_delivery_address(previous_zip, delivery_address) {
    if(delivery_addresses == null){
        await select_all_delivery_addresses();
    }
    let index = delivery_addresses.findIndex(da => {
        return (
            da.user == delivery_address.user &&
            da.zip == previous_zip
        );
    });
    if(index >= 0) {
        delivery_addresses[index] = delivery_address;
        set_item("delivery_address#" + index.toString(), delivery_address);
    }
}


// Adiciona o endereço de entrega especificado
export async function add_delivery_address(delivery_address) {

    // Validação da estrutura do endereço de entrega
    if(Object.prototype.hasOwnProperty.call(delivery_address, "user") === false){
        throw TypeError("delivery_address must have an 'user' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "zip") === false){
        throw TypeError("delivery_address must have a 'zip' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "title") === false){
        throw TypeError("delivery_address must have a 'title' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "state") === false){
        throw TypeError("delivery_address must have a 'state' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "city") === false){
        throw TypeError("delivery_address must have a 'city' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "district") === false){
        throw TypeError("delivery_address must have a 'district' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "street") === false){
        throw TypeError("delivery_address must have a 'street' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "number") === false){
        throw TypeError("delivery_address must have a 'number' property");
    }else if(Object.prototype.hasOwnProperty.call(delivery_address, "complement") === false){
        throw TypeError("delivery_address must have a 'complement' property");
    }

    // Adição do endereço de entrega à base de dados
    if(delivery_addresses == null) {
        await select_all_delivery_addresses();
    }
    set_item("delivery_address#" + delivery_addresses.length.toString(), delivery_address);
    delivery_addresses.push(delivery_address);
}


// Deleta o endereço de entrega especificado
export async function delete_delivery_address_by_id(id) {
    if(delivery_addresses != null){
        if(id < delivery_addresses.length && id >= 0){
            delivery_addresses.splice(id, 1);
            delete_item("delivery_address#" + id.toString());
        }
    }
    else{
        delete_item("delivery_address#" + id.toString());
    }
}


// Deleta o endereço de entrega especificado
export async function delete_delivery_address(user_id, delivery_address_zip) {
    if(delivery_addresses == null) {
        await select_all_delivery_addresses();
    }
    let index = delivery_addresses.findIndex(da => {
        return (
            da.user == user_id && 
            da.zip == delivery_address_zip
        );
    });
    if(index >= 0){
        delivery_addresses.splice(index, 1);
        delete_item("delivery_address#" + index.toString());
    }
}



///////// .:::: RATINGS ::::. //////////

// Retorna todas as avaliações
export async function select_all_ratings() {
    if(ratings == null) {
        await load_local_storage_elements("ratings#").then(res => {
            ratings = res;
        });
    }
    return ratings;
}


// Retorna todos os avaliações do usuário especificado
export async function select_user_ratings(user_id) {
    if(ratings == null) {
        await select_all_ratings();
    }
    return ratings.filter(rating => {
        return rating.user == user_id;
    });
}


// Retorna todos os avaliações do produto especificado
export async function select_product_ratings(product_id) {
    if(ratings == null) {
        await select_all_ratings();
    }
    return ratings.filter(rating => {
        return rating.product == product_id;
    });
}


// Retorna a avaliação do usuário em relação ao produto especificado
export async function select_user_product_rating(user_id, product_id) {
    if(ratings == null) {
        await select_all_ratings();
    }
    return ratings.find(rating => {
        return (rating.user == user_id && rating.product == product_id);
    });
}


// Adiciona a avaliação especificada
export async function add_rating(rating) {

    // Validação da estrutura da avaliação
    if(Object.prototype.hasOwnProperty.call(rating, "user") === false){
        throw TypeError("rating must have an 'user' property");
    }else if(Object.prototype.hasOwnProperty.call(rating, "product") === false){
        throw TypeError("rating must have a 'product' property");
    }else if(Object.prototype.hasOwnProperty.call(rating, "rating") === false){
        throw TypeError("rating must have a 'rating' property");
    }

    // Adição da avaliação à base de dados
    if(ratings == null) {
        await select_all_ratings();
    }
    set_item("ratings#" + ratings.length.toString(), rating);
    ratings.push(rating);
}


// Deleta a avaliação especificada a partir do ID
export async function delete_rating_by_id(id) {
    if(ratings != null){
        if(id < ratings.length && id >= 0){
            ratings.splice(id, 1);
            delete_item("ratings#" + id.toString());
        }
    }
    else{
        delete_item("ratings#" + id.toString());
    }
}


// Deleta a avaliação especificada
export async function delete_rating(rating) {
    if(ratings == null) {
        await select_all_ratings();
    }
    let index = ratings.findIndex(r => {
        return (
            r.user == rating.user && 
            r.product == rating.product
        );
    });
    if(index >= 0){
        ratings.splice(index, 1);
        delete_item("ratings#" + index.toString());
    }
}



///////// .:::: SHOPPING CART ::::. //////////

// Retorna todas os carrinhos de compras
export async function select_all_shopping_carts() {
    if(shopping_carts == null) {
        await load_local_storage_elements("shopping_cart#").then(res => {
            shopping_carts = res;
        });
    }
    return shopping_carts;
}


// Retorna todos os carrinhos de compras pertencentes ao usuário especificado
export async function select_user_shopping_carts(user_id) {
    if(shopping_carts == null) {
        await select_all_shopping_carts();
    }
    return shopping_carts.filter(cart => {
        return cart.user == user_id;
    });
}


// Retorna um carrinho de compras específico
export async function select_shopping_cart(user_id, invoice) {
    if(shopping_carts == null) {
        await select_all_shopping_carts();
    }
    return shopping_carts.find(cart => {
        return (cart.user == user_id && cart.invoice == invoice);
    });
}


// Adiciona o carrinho de compras especificado
export async function add_shopping_cart(shopping_cart) {

    // Validação da estrutura do carrinho de compras
    if(Object.prototype.hasOwnProperty.call(shopping_cart, "user") === false){
        throw TypeError("shopping_cart must have an 'user' property");
    }else if(Object.prototype.hasOwnProperty.call(shopping_cart, "invoice") === false){
        throw TypeError("shopping_cart must have a 'invoice' property");
    }else if(Object.prototype.hasOwnProperty.call(shopping_cart, "datetime") === false){
        throw TypeError("shopping_cart must have a 'datetime' property");
    }else if(Object.prototype.hasOwnProperty.call(shopping_cart, "subtotal") === false){
        throw TypeError("shopping_cart must have a 'subtotal' property");
    }else if(Object.prototype.hasOwnProperty.call(shopping_cart, "freight") === false){
        throw TypeError("shopping_cart must have a 'freight' property");
    }

    // Adição do carrinho de compras à base de dados
    if(shopping_carts == null) {
        await select_all_shopping_carts();
    }
    set_item("shopping_cart#" + shopping_carts.length.toString(), shopping_cart);
    shopping_carts.push(shopping_cart);
}


// Deleta o carrinho de compras especificado a partir do ID
export async function delete_shopping_cart_by_id(id) {
    if(shopping_carts != null){
        if(id < shopping_carts.length && id >= 0){
            shopping_carts.splice(id, 1);
            delete_item("shopping_cart#" + id.toString());
        }
    }
    else{
        delete_item("shopping_cart#" + id.toString());
    }
}


// Deleta o carrinho de compras especificado
export async function delete_shopping_cart(shopping_cart) {
    if(shopping_carts == null) {
        await select_all_shopping_carts();
    }
    let index = shopping_carts.findIndex(sc => {
        return (
            sc.user == shopping_cart.user && 
            sc.invoice == shopping_cart.invoice
        );
    });
    if(index >= 0){
        shopping_carts.splice(index, 1);
        delete_item("shopping_cart#" + index.toString());
    }
}



///////// .:::: CART PRODUCT ::::. //////////

// Retorna todas os itens dos carrinhos de compras
export async function select_all_cart_products() {
    if(cart_products == null) {
        await load_local_storage_elements("cart_product#").then(res => {
            cart_products = res;
        });
    }
    return cart_products;
}


// Retorna todos os itens do carrinhos de compras especificado
export async function select_cart_products(user_id, invoice) {
    if(cart_products == null) {
        await select_all_cart_products();
    }
    return cart_products.filter(cp => {
        return (cp.user == user_id && cp.cart == invoice);
    });
}


// Retorna um item de carrinho de compras específico
export async function select_cart_product(user_id, cart_invoice, product_id) {
    if(cart_products == null) {
        await select_all_cart_products();
    }
    return cart_products.find(cp => {
        return (cp.user == user_id && cp.cart == cart_invoice && cp.product == product_id);
    });
}


// Adiciona o item de carrinho de compras especificado
export async function add_cart_product(cart_product) {

    // Validação da estrutura da avaliação
    if(Object.prototype.hasOwnProperty.call(cart_product, "user") === false){
        throw TypeError("cart_product must have an 'user' property");
    }else if(Object.prototype.hasOwnProperty.call(cart_product, "cart") === false){
        throw TypeError("cart_product must have a 'cart' property");
    }else if(Object.prototype.hasOwnProperty.call(cart_product, "product") === false){
        throw TypeError("cart_product must have a 'product' property");
    }else if(Object.prototype.hasOwnProperty.call(cart_product, "quantity") === false){
        throw TypeError("cart_product must have a 'quantity' property");
    }else if(Object.prototype.hasOwnProperty.call(cart_product, "subtotal") === false){
        throw TypeError("cart_product must have a 'subtotal' property");
    }

    // Adição da avaliação à base de dados
    if(cart_products == null) {
        await select_all_cart_products();
    }
    set_item("cart_product#" + cart_products.length.toString(), cart_product);
    cart_products.push(cart_product);
}


// Deleta o item de carrinho de compras especificado a partir do ID
export async function delete_cart_product_by_id(id) {
    if(cart_products != null){
        if(id < cart_products.length && id >= 0){
            cart_products.splice(id, 1);
            delete_item("cart_product#" + id.toString());
        }
    }
    else{
        delete_item("cart_product#" + id.toString());
    }
}


// Deleta o item de carrinho de compras especificado
export async function delete_cart_product(cart_product) {
    if(cart_products == null) {
        await select_all_cart_products();
    }
    let index = cart_products.findIndex(cp => {
        return (
            cp.user == cart_product.user && 
            cp.cart == cart_product.cart && 
            cp.product == cart_product.product
        );
    });
    if(index >= 0){
        cart_products.splice(index, 1);
        delete_item("cart_product#" + index.toString());
    }
}



///////// .:::: PRODUCT ::::. //////////

// Retorna todos os livros
export async function select_all_products() {
    if(products == null){
        await load_local_storage_elements("product#").then(res => {
            products = res;
        });
    }
    return products;
}


// Retorna o produto especificado
export async function select_product_by_id(id) {
    if(products == null) {
        await select_all_products();
    }
    return products.find(product => {
        return product.id == id;
    });
}


// Retorna o produto especificado
export async function select_product_by_title(title) {
    if(products == null) {
        await select_all_products();
    }
    return products.find(product => {
        return product.title == title;
    });
}


// Adiciona o produto especificado
export async function add_product(product) {

    // Validação da estrutura do produto
    if(Object.prototype.hasOwnProperty.call(product, "id") === false){
        throw TypeError("product must have an 'id' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "title") === false){
        throw TypeError("product must have a 'title' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "price") === false){
        throw TypeError("product must have a 'price' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "stock") === false){
        throw TypeError("product must have a 'stock' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "rating") === false){
        throw TypeError("product must have a 'rating' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "sales") === false){
        throw TypeError("product must have a 'sales' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "author") === false){
        throw TypeError("product must have a 'author' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "publisher") === false){
        throw TypeError("product must have a 'publisher' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "finishing") === false){
        throw TypeError("product must have a 'finishing' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "year") === false){
        throw TypeError("product must have a 'year' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "language") === false){
        throw TypeError("product must have a 'language' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "pages") === false){
        throw TypeError("product must have a 'pages' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "description") === false){
        throw TypeError("product must have a 'description' property");
    }else if(Object.prototype.hasOwnProperty.call(product, "image_source") === false){
        throw TypeError("product must have a 'image_source' property");
    }

    // Adição do produto à base de dados
    if(products == null) {
        await select_all_products();
    }
    set_item("product#" + products.length.toString(), product);
    products.push(product);
}


// Atualiza o produto especificado
export async function update_product(product) {
    if(products == null){
        await select_all_products();
    }
    let index = products.findIndex(p => {
        return p.id == product.id;
    });
    if(index >= 0) {
        products[index] = product;
        set_item("product#" + index.toString(), product);
    }
}


// Deleta o produto especificado a partir do ID
export async function delete_product_by_id(id) {
    if(products != null){
        if(id < products.length && id >= 0){
            products.splice(id, 1);
            delete_item("product#" + id.toString());
        }
    }
    else{
        delete_item("product#" + id.toString());
    }
}


// Deleta o produto especificado
export async function delete_product(product) {
    if(products == null) {
        await select_all_products();
    }
    let index = products.findIndex(p => {
        return (p.id == product.id);
    });
    if(index >= 0){
        products.splice(index, 1);
        delete_item("product#" + index.toString());
    }
}



///////// .:::: CATEGORY ::::. //////////

// Retorna todas as categorias
export async function select_all_categories() {
    if(categories == null) {
        await load_local_storage_elements("category#").then(res => {
            categories = res;
        });
    }
    return categories;
}


// Retorna a categoria especificada
export async function select_category_by_id(id) {
    if(categories == null) {
        await select_all_categories();
    }
    return categories.find(category => {
        return category.id == id;
    });
}


// Retorna a categoria especificada
export async function select_category_by_name(name) {
    if(categories == null) {
        await select_all_categories();
    }
    return categories.find(category => {
        return category.name == name;
    });
}


// Adiciona a categoria especificada
export async function add_category(category) {

    // Validação da estrutura da categoria
    if(Object.prototype.hasOwnProperty.call(category, "id") === false){
        throw TypeError("category must have an 'id' property");
    }else if(Object.prototype.hasOwnProperty.call(category, "name") === false){
        throw TypeError("category must have a 'name' property");
    }

    // Adição da categoria à base de dados
    if(categories == null) {
        await select_all_categories();
    }
    set_item("category#" + categories.length.toString(), category);
    categories.push(category);
}


// Deleta a categoria especificada a partir do ID
export async function delete_category_by_id(id) {
    if(categories != null){
        if(id < categories.length && id >= 0){
            categories.splice(id, 1);
            delete_item("category#" + id.toString());
        }
    }
    else{
        delete_item("category#" + id.toString());
    }
}


// Deleta a categoria especificada
export async function delete_category(category) {
    if(categories == null) {
        await select_all_categories();
    }
    let index = categories.findIndex(c => {
        return (c.id == category.id);
    });
    if(index >= 0){
        categories.splice(index, 1);
        delete_item("category#" + index.toString());
    }
}



///////// .:::: PRODUCT CATEGORY ::::. //////////

// Retorna todas as categorias dos produtos
export async function select_all_product_categories() {
    if(product_categories == null) {
        await load_local_storage_elements("product_category#").then(res => {
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


// Adiciona a categoria especificada
export async function add_product_category(product_category) {

    // Validação da estrutura da categoria
    if(Object.prototype.hasOwnProperty.call(product_category, "id") === false){
        throw TypeError("product_category must have an 'id' property");
    }else if(Object.prototype.hasOwnProperty.call(product_category, "name") === false){
        throw TypeError("product_category must have a 'name' property");
    }

    // Adição da categoria à base de dados
    if(product_categories == null) {
        await select_all_product_categories();
    }
    set_item("product_category#" + product_categories.length.toString(), product_category);
    product_categories.push(product_category);
}


// Deleta a categoria especificada a partir do ID
export async function delete_product_category_by_id(id) {
    if(product_categories != null){
        if(id < product_categories.length && id >= 0){
            product_categories.splice(id, 1);
            delete_item("product_category#" + id.toString());
        }
    }
    else{
        delete_item("product_category#" + id.toString());
    }
}


// Deleta a categoria especificada
export async function delete_product_category(product_category) {
    if(product_categories == null) {
        await select_all_product_categories();
    }
    let index = product_categories.findIndex(c => {
        return (c.id == product_category.id);
    });
    if(index >= 0){
        product_categories.splice(index, 1);
        delete_item("product_category#" + index.toString());
    }
}