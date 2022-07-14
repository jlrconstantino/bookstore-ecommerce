"use strict"

// AXIOS
import axios from 'axios';

// URL inicial do servidor
const server_url = "http://localhost:3000";

// Objeto controlador
const mongoose_manager = {};


///////// .:::: USER ::::. //////////

// POST
mongoose_manager.post_user = async function(user){
    let response = await axios.post({
        url: "/users/", 
        baseURL: server_url, 
        data: {
            body: user
        }, 
    });
    return response;
}


// PUT (by id)
mongoose_manager.put_user_by_id = async function(user, id){
    let response = await axios.put({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
        data: {
            body: user
        }, 
    });
    return response;
}


// PUT (by email)
mongoose_manager.put_user_by_email = async function(user, email){
    let response = await axios.put({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            email: email.toString(), 
        }, 
        data: {
            body: user
        }, 
    });
    return response;
}


// DELETE (by id)
mongoose_manager.delete_user_by_id = async function(id){
    let response = await axios.delete({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by email)
mongoose_manager.delete_user_by_email = async function(email){
    let response = await axios.delete({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            email: email.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_user_by_id = async function(id){
    let response = await axios.get({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            id: id.toString()
        }, 
    });
    return response;
}


// GET (by email)
mongoose_manager.get_user_by_email = async function(email){
    let response = await axios.get({
        url: "/users/", 
        baseURL: server_url, 
        params: {
            email: email.toString()
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_users = async function(){
    let response = await axios.get({
        url: "/users/", 
        baseURL: server_url, 
    });
    return response;
}



///////// .:::: CREDIT CARD ::::. //////////

// POST
mongoose_manager.post_credit_card = async function(credit_card){
    let response = await axios.post({
        url: "/credit_cards/", 
        baseURL: server_url, 
        data: {
            body: credit_card
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_credit_card = async function(credit_card, user, number){
    let response = await axios.put({
        url: "/credit_cards/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            number: number.toString(), 
        }, 
        data: {
            body: credit_card
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_credit_card = async function(user, number){
    let response = await axios.delete({
        url: "/credit_cards/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            number: number.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_credit_cards_from_user = async function(user){
    let response = await axios.delete({
        url: "/credit_cards/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_credit_card = async function(user, number){
    let response = await axios.get({
        url: "/credit_cards/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            number: number.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_credit_cards = async function(){
    let response = await axios.get({
        url: "/credit_cards/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_credit_cards_from_user = async function(user){
    let response = await axios.get({
        url: "/credit_cards/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}



///////// .:::: DELIVERY ADDRESS ::::. //////////

// POST
mongoose_manager.post_delivery_address = async function(delivery_address){
    let response = await axios.post({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        data: {
            body: delivery_address
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_delivery_address = async function(delivery_address, user, zip){
    let response = await axios.put({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            zip: zip.toString(), 
        }, 
        data: {
            body: delivery_address
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_delivery_address = async function(user, zip){
    let response = await axios.delete({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            zip: zip.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_delivery_addresses_from_user = async function(user){
    let response = await axios.delete({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_delivery_address = async function(user, zip){
    let response = await axios.get({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            zip: zip.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_delivery_addresses = async function(){
    let response = await axios.get({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_delivery_addresses_from_user = async function(user){
    let response = await axios.get({
        url: "/delivery_addresses/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}



///////// .:::: RATINGS ::::. //////////

// POST
mongoose_manager.post_ratings = async function(ratings){
    let response = await axios.post({
        url: "/ratings/", 
        baseURL: server_url, 
        data: {
            body: ratings
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_ratings = async function(ratings, user, product){
    let response = await axios.put({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            product: product.toString(), 
        }, 
        data: {
            body: ratings
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_ratings = async function(user, product){
    let response = await axios.delete({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            product: product.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_ratings_from_user = async function(user){
    let response = await axios.delete({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM PRODUCT
mongoose_manager.delete_all_ratings_from_product = async function(product){
    let response = await axios.delete({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_ratings = async function(user, product){
    let response = await axios.get({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_ratings = async function(){
    let response = await axios.get({
        url: "/ratings/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_ratings_from_user = async function(user){
    let response = await axios.get({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET ALL FROM PRODUCT
mongoose_manager.get_all_ratings_from_product = async function(product){
    let response = await axios.get({
        url: "/ratings/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}



///////// .:::: SHOPPING CART ::::. //////////

// POST
mongoose_manager.post_shopping_cart = async function(shopping_cart){
    let response = await axios.post({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        data: {
            body: shopping_cart
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_shopping_cart = async function(shopping_cart, user, invoice){
    let response = await axios.put({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            invoice: invoice.toString(), 
        }, 
        data: {
            body: shopping_cart
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_shopping_cart = async function(user, invoice){
    let response = await axios.delete({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            invoice: invoice.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_shopping_carts_from_user = async function(user){
    let response = await axios.delete({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_shopping_cart = async function(user, invoice){
    let response = await axios.get({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            invoice: invoice.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_shopping_carts = async function(){
    let response = await axios.get({
        url: "/shopping_carts/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_shopping_carts_from_user = async function(user){
    let response = await axios.get({
        url: "/shopping_carts/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}



///////// .:::: CART PRODUCT ::::. //////////

// POST
mongoose_manager.post_cart_product = async function(cart_product){
    let response = await axios.post({
        url: "/cart_products/", 
        baseURL: server_url, 
        data: {
            body: cart_product
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_cart_product = async function(cart_product, user, cart, product){
    let response = await axios.put({
        url: "/cart_products/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
            product: product.toString(), 
        }, 
        data: {
            body: cart_product
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_cart_product = async function(user, cart, product){
    let response = await axios.delete({
        url: "/cart_products/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
            product: product.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_cart_products_from_shopping_cart = async function(user, cart){
    let response = await axios.delete({
        url: "/cart_products/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_cart_product = async function(user, cart, product){
    let response = await axios.get({
        url: "/cart_products/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_cart_products = async function(){
    let response = await axios.get({
        url: "/cart_products/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_cart_products_from_shopping_cart = async function(user, cart){
    let response = await axios.get({
        url: "/cart_products/", 
        baseURL: server_url, 
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
        }, 
    });
    return response;
}



///////// .:::: PRODUCT ::::. //////////

// POST
mongoose_manager.post_product = async function(product){
    let response = await axios.post({
        url: "/products/", 
        baseURL: server_url, 
        data: {
            body: product
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_product = async function(product, id){
    let response = await axios.put({
        url: "/products/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
        data: {
            body: product
        }, 
    });
    return response;
}


// DELETE (by id)
mongoose_manager.delete_product_by_id = async function(id){
    let response = await axios.delete({
        url: "/products/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by title)
mongoose_manager.delete_product_by_title = async function(title){
    let response = await axios.delete({
        url: "/products/", 
        baseURL: server_url, 
        params: {
            title: title.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_product_by_id = async function(id){
    let response = await axios.get({
        url: "/products/", 
        baseURL: server_url, 
        params: {
            id: id.toString()
        }, 
    });
    return response;
}


// GET (by title)
mongoose_manager.get_product_by_title = async function(title){
    let response = await axios.get({
        url: "/products/", 
        baseURL: server_url, 
        params: {
            title: title.toString()
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_products = async function(){
    let response = await axios.get("/products");
    response = await response.data;
    return response;
}



///////// .:::: CATEGORY ::::. //////////

// POST
mongoose_manager.post_category = async function(category){
    let response = await axios.post({
        url: "/categories/", 
        baseURL: server_url, 
        data: {
            body: category
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_category = async function(category, id){
    let response = await axios.put({
        url: "/categories/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
        data: {
            body: category
        }, 
    });
    return response;
}


// DELETE (by id)
mongoose_manager.delete_category_by_id = async function(id){
    let response = await axios.delete({
        url: "/categories/", 
        baseURL: server_url, 
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by name)
mongoose_manager.delete_category_by_name = async function(name){
    let response = await axios.delete({
        url: "/categories/", 
        baseURL: server_url, 
        params: {
            name: name.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_category_by_id = async function(id){
    let response = await axios.get({
        url: "/categories/", 
        baseURL: server_url, 
        params: {
            id: id.toString()
        }, 
    });
    return response;
}


// GET (by name)
mongoose_manager.get_category_by_name = async function(name){
    let response = await axios.get({
        url: "/categories/", 
        baseURL: server_url, 
        params: {
            name: name.toString()
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_categories = async function(){
    let response = await axios.get({
        url: "/categories/", 
        baseURL: server_url, 
    });
    return response;
}



///////// .:::: PRODUCT CATEGORY ::::. //////////

// POST
mongoose_manager.post_product_category = async function(product_category){
    let response = await axios.post({
        url: "/product_categories/", 
        baseURL: server_url, 
        data: {
            body: product_category
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_product_category = async function(product_category, product, category){
    let response = await axios.put({
        url: "/product_categories/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
            category: category.toString(), 
        }, 
        data: {
            body: product_category
        }, 
    });
    return response;
}


// DELETE
mongoose_manager.delete_product_category = async function(product, category){
    let response = await axios.delete({
        url: "/product_categories/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
            category: category.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM PRODUCT
mongoose_manager.delete_all_product_categories_from_product = async function(product){
    let response = await axios.delete({
        url: "/product_categories/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_product_category = async function(product, category){
    let response = await axios.get({
        url: "/product_categories/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
            category: category.toString(), 
        }, 
    });
    return response;
}


// GET ALL
mongoose_manager.get_all_product_categories = async function(){
    let response = await axios.get({
        url: "/product_categories/", 
        baseURL: server_url, 
    });
    return response;
}


// GET ALL FROM PRODUCT
mongoose_manager.get_all_product_categories_from_product = async function(product){
    let response = await axios.get({
        url: "/product_categories/", 
        baseURL: server_url, 
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}



///////// .:::: EXPORT ::::. //////////

export default mongoose_manager;