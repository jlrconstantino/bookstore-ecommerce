// Dependências
import mongoose from "mongoose";

// Esquema do carrinho
const shopping_cart_schema = new mongoose.Schema({
    user: {
        type: String, 
        required: true, 
    }, 
    invoice: {
        type: String,
        required: true, 
    }, 
    datetime: {
        type: String, 
        required: true, 
    }, 
    subtotal: {
        type: Number, 
        required: true, 
    }, 
    freight: {
        type: Number, 
        required: true, 
    }, 
});

// Chave primária original
shopping_cart_schema.createIndex({user: 1, invoice: 1}, {unique: true});

// Exportação do esquema
export default mongoose.model("shopping_cart", shopping_cart_schema);