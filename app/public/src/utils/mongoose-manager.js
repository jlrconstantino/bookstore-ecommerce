"use strict"

// AXIOS
import axios from 'axios';

// URL inicial do servidor
const server_url = "http://localhost:3000/";


///////// .:::: USER ::::. //////////

// Obtém um usuário via ID
export async function get_user_by_id(id){
    const res = await axios.get({
        url: server_url + "users/", 
        params: {
            id: id.toString()
        }, 
    });
    return res;
}


// Obtém um usuário via e-mail
export async function get_user_by_email(email){
    const res = await axios.get({
        url: server_url + "users/", 
        params: {
            email: email.toString()
        }, 
    });
    return res;
}


///////// .:::: CREDIT CARD ::::. //////////



///////// .:::: DELIVERY ADDRESS ::::. //////////



///////// .:::: RATINGS ::::. //////////



///////// .:::: SHOPPING CART ::::. //////////



///////// .:::: CART PRODUCT ::::. //////////



///////// .:::: PRODUCT ::::. //////////



///////// .:::: CATEGORY ::::. //////////



///////// .:::: PRODUCT CATEGORY ::::. //////////