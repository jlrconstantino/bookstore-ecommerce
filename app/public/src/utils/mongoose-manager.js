"use strict"

// AXIOS
import axios from 'axios';

// Objeto controlador
const mongoose_manager = {};


///////// .:::: USER ::::. //////////

// POST
mongoose_manager.post_user = async function(user){
    let response = await axios.post("/users", {
        data: {
            body: user
        }, 
    });
    return response;
}


// PUT (by id)
mongoose_manager.put_user_by_id = async function(user, id){
    let response = await axios.put("/users/", {
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
    let response = await axios.put("/users/", {
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
    let response = await axios.delete("/users/", {
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by email)
mongoose_manager.delete_user_by_email = async function(email){
    let response = await axios.delete("/users/", {
        params: {
            email: email.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_user_by_id = async function(id){
    let response = await axios.get("/users/", {
        params: {
            id: id.toString()
        }, 
    });
    response = await response.data;
    return response;
}


// GET (by email)
mongoose_manager.get_user_by_email = async function(email){
    let response = await axios.get("/users/", {
        params: {
            email: email.toString()
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_users = async function(){
    let response = await axios.get("/users");
    response = await response.data;
    return response;
}



///////// .:::: CREDIT CARD ::::. //////////

// POST
mongoose_manager.post_credit_card = async function(credit_card){
    let response = await axios.post("/credit_cards", {
        data: {
            body: credit_card
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_credit_card = async function(credit_card, user, number){
    let response = await axios.put("/credit_cards/", {
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
    let response = await axios.delete("/credit_cards/", {
        params: {
            user: user.toString(), 
            number: number.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_credit_cards_from_user = async function(user){
    let response = await axios.delete("/credit_cards/", {
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_credit_card = async function(user, number){
    let response = await axios.get("/credit_cards/", {
        params: {
            user: user.toString(), 
            number: number.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_credit_cards = async function(){
    let response = await axios.get("/credit_cards");
    response = await response.data;
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_credit_cards_from_user = async function(user){
    let response = await axios.get("/credit_cards/", {
        params: {
            user: user.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}



///////// .:::: DELIVERY ADDRESS ::::. //////////

// POST
mongoose_manager.post_delivery_address = async function(delivery_address){
    let response = await axios.post("/delivery_addresses", {
        data: {
            body: delivery_address
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_delivery_address = async function(delivery_address, user, zip){
    let response = await axios.put("/delivery_addresses/", {
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
    let response = await axios.delete("/delivery_addresses/", {
        params: {
            user: user.toString(), 
            zip: zip.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_delivery_addresses_from_user = async function(user){
    let response = await axios.delete("/delivery_addresses/", {
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_delivery_address = async function(user, zip){
    let response = await axios.get("/delivery_addresses/", {
        params: {
            user: user.toString(), 
            zip: zip.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_delivery_addresses = async function(){
    let response = await axios.get("/delivery_addresses");
    response = await response.data;
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_delivery_addresses_from_user = async function(user){
    let response = await axios.get("/delivery_addresses/", {
        params: {
            user: user.toString(), 
        }, 
    });
    console.log("Response = ", response);
    response = await response.data;
    console.log("Data = ", response);
    return response;
}



///////// .:::: RATINGS ::::. //////////

// POST
mongoose_manager.post_ratings = async function(ratings){
    let response = await axios.post("/ratings", {
        data: {
            body: ratings
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_ratings = async function(ratings, user, product){
    let response = await axios.put("/ratings/", {
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
    let response = await axios.delete("/ratings/", {
        params: {
            user: user.toString(), 
            product: product.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_ratings_from_user = async function(user){
    let response = await axios.delete("/ratings/", {
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM PRODUCT
mongoose_manager.delete_all_ratings_from_product = async function(product){
    let response = await axios.delete("/ratings/", {
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_ratings = async function(user, product){
    let response = await axios.get("/ratings/", {
        params: {
            user: user.toString(), 
            product: product.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_ratings = async function(){
    let response = await axios.get("/ratings");
    response = await response.data;
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_ratings_from_user = async function(user){
    let response = await axios.get("/ratings/", {
        params: {
            user: user.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL FROM PRODUCT
mongoose_manager.get_all_ratings_from_product = async function(product){
    let response = await axios.get("/ratings/", {
        params: {
            product: product.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}



///////// .:::: SHOPPING CART ::::. //////////

// POST
mongoose_manager.post_shopping_cart = async function(shopping_cart){
    let response = await axios.post("/shopping_carts", {
        data: {
            body: shopping_cart
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_shopping_cart = async function(shopping_cart, user, invoice){
    let response = await axios.put("/shopping_carts/", {
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
    let response = await axios.delete("/shopping_carts/", {
        params: {
            user: user.toString(), 
            invoice: invoice.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM USER
mongoose_manager.delete_all_shopping_carts_from_user = async function(user){
    let response = await axios.delete("/shopping_carts/", {
        params: {
            user: user.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_shopping_cart = async function(user, invoice){
    let response = await axios.get("/shopping_carts/", {
        params: {
            user: user.toString(), 
            invoice: invoice.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_shopping_carts = async function(){
    let response = await axios.get("/shopping_carts");
    response = await response.data;
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_shopping_carts_from_user = async function(user){
    let response = await axios.get("/shopping_carts/", {
        params: {
            user: user.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}



///////// .:::: CART PRODUCT ::::. //////////

// POST
mongoose_manager.post_cart_product = async function(cart_product){
    let response = await axios.post("/cart_products", {
        data: {
            body: cart_product
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_cart_product = async function(cart_product, user, cart, product){
    let response = await axios.put("/cart_products/", {
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
    let response = await axios.delete("/cart_products/", {
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
    let response = await axios.delete("/cart_products/", {
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_cart_product = async function(user, cart, product){
    let response = await axios.get("/cart_products/", {
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
            product: product.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_cart_products = async function(){
    let response = await axios.get("/cart_products");
    response = await response.data;
    return response;
}


// GET ALL FROM USER
mongoose_manager.get_all_cart_products_from_shopping_cart = async function(user, cart){
    let response = await axios.get("/cart_products/", {
        params: {
            user: user.toString(), 
            cart: cart.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}



///////// .:::: PRODUCT ::::. //////////

// POST
mongoose_manager.post_product = async function(product){
    let response = await axios.post("/products", {
        data: {
            body: product
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_product = async function(product, id){
    let response = await axios.put("/products/", {
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
    let response = await axios.delete("/products/", {
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by title)
mongoose_manager.delete_product_by_title = async function(title){
    let response = await axios.delete("/products/", {
        params: {
            title: title.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_product_by_id = async function(id){
    let response = await axios.get("/products/", {
        params: {
            id: id.toString()
        }, 
    });
    response = await response.data;
    return response;
}


// GET (by title)
mongoose_manager.get_product_by_title = async function(title){
    let response = await axios.get("/products/", {
        params: {
            title: title.toString()
        }, 
    });
    response = await response.data;
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
    let response = await axios.post("/categories", {
        data: {
            body: category
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_category = async function(category, id){
    let response = await axios.put("/categories/", {
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
    let response = await axios.delete("/categories/", {
        params: {
            id: id.toString(), 
        }, 
    });
    return response;
}


// DELETE (by name)
mongoose_manager.delete_category_by_name = async function(name){
    let response = await axios.delete("/categories/", {
        params: {
            name: name.toString(), 
        }, 
    });
    return response;
}


// GET (by id)
mongoose_manager.get_category_by_id = async function(id){
    let response = await axios.get("/categories/", {
        params: {
            id: id.toString()
        }, 
    });
    response = await response.data;
    return response;
}


// GET (by name)
mongoose_manager.get_category_by_name = async function(name){
    let response = await axios.get("/categories/", {
        params: {
            name: name.toString()
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_categories = async function(){
    let response = await axios.get("/categories");
    response = await response.data;
    return response;
}



///////// .:::: PRODUCT CATEGORY ::::. //////////

// POST
mongoose_manager.post_product_category = async function(product_category){
    let response = await axios.post("/product_categories", {
        data: {
            body: product_category
        }, 
    });
    return response;
}


// PUT
mongoose_manager.put_product_category = async function(product_category, product, category){
    let response = await axios.put("/product_categories/", {
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
    let response = await axios.delete("/product_categories/", {
        params: {
            product: product.toString(), 
            category: category.toString(), 
        }, 
    });
    return response;
}


// DELETE ALL FROM PRODUCT
mongoose_manager.delete_all_product_categories_from_product = async function(product){
    let response = await axios.delete("/product_categories/", {
        params: {
            product: product.toString(), 
        }, 
    });
    return response;
}


// GET
mongoose_manager.get_product_category = async function(product, category){
    let response = await axios.get("/product_categories/", {
        params: {
            product: product.toString(), 
            category: category.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}


// GET ALL
mongoose_manager.get_all_product_categories = async function(){
    let response = await axios.get("/product_categories");
    response = await response.data;
    return response;
}


// GET ALL FROM PRODUCT
mongoose_manager.get_all_product_categories_from_product = async function(product){
    let response = await axios.get("/product_categories/", {
        params: {
            product: product.toString(), 
        }, 
    });
    response = await response.data;
    return response;
}



///////// .:::: EXPORT ::::. //////////

export default mongoose_manager;