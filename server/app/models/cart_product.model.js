// Dependências
import mongoose from "mongoose";

// Esquema do item de carrinho
const cart_product_schema = new mongoose.Schema({
    user: {
        type: String, 
        required: true, 
    }, 
    cart: {
        type: String,
        required: true, 
    }, 
    product: {
        type: String, 
        required: true, 
    }, 
    quantity: {
        type: Number, 
        required: true, 
    }, 
    subtotal: {
        type: Number, 
        required: true, 
    }, 
});

// Chave primária original
cart_product_schema.createIndex({user: 1, cart: 1, product: 1}, {unique: true});

// Exportação do esquema
export default mongoose.model("cart_product", cart_product_schema);