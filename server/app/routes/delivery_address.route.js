// Dependências
import express from "express";
import delivery_address_controller from "../controllers/delivery_address.controller.js";

// Roteador
const delivery_address_router = express.Router();

// Rotas
delivery_address_router.push("/", delivery_address_controller.post);
delivery_address_router.put("/:user&:number", delivery_address_controller.put);
delivery_address_router.delete("/:user&:number", delivery_address_controller.delete);
delivery_address_router.delete("/:user", delivery_address_controller.delete_all_from_user);
delivery_address_router.get("/:user&:number", delivery_address_controller.get);
delivery_address_router.get("/", delivery_address_controller.get_all);
delivery_address_router.get("/:user", delivery_address_controller.get_all_from_user);

// Exportação do roteador
export default delivery_address_router;