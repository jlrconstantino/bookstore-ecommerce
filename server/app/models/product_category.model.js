// Dependências
import mongoose from "mongoose";

// Esquema da categoria do produto
const product_category_schema = new mongoose.Schema({
    product: {
        type: String, 
        required: true, 
    }, 
    category: {
        type: String,
        required: true, 
    }, 
});

// Chave primária original
product_category_schema.createIndex({product: 1, category: 1}, {unique: true});

// Exportação do esquema
export default mongoose.model("product_category", product_category_schema);