// Dependências
import { url } from "../config/db.config.js";
import mongoose from "mongoose";

// Estruturação das promessas
mongoose.Promise = global.Promise;

// Base de dados
const db = {};
db.mongoose = mongoose;
db.url = url;

export default db;