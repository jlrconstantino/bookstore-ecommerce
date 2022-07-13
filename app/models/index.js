// Dependências
import { url } from "../config/db.config.js";
import mongoose from "mongoose";

// Modelos esquemáticos do banco de dados
import cart_product_schema from "./cart_product.model.js";
import category_schema from "./category.model.js";
import credit_card_schema from "./credit_card.model.js";
import delivery_address_schema from "./delivery_address.model.js";
import product_category_schema from "./product_category.model.js";
import product_schema from "./product.model.js";
import ratings_schema from "./ratings.model.js";
import shopping_cart_schema from "./shopping_cart.model.js";
import user_schema from "./user.model.js";

// Estruturação das promessas
mongoose.Promise = global.Promise;

// Base de dados
const db = {};
db.mongoose = mongoose;
db.url = url;

// Atribuição dos modelos
db.mongoose.model("cart_product", cart_product_schema);
db.mongoose.model("category", category_schema);
db.mongoose.model("credit_card", credit_card_schema);
db.mongoose.model("delivery_address", delivery_address_schema);
db.mongoose.model("product_category", product_category_schema);
db.mongoose.model("product", product_schema);
db.mongoose.model("ratings", ratings_schema);
db.mongoose.model("shopping_cart", shopping_cart_schema);
db.mongoose.model("user", user_schema);

export default db;