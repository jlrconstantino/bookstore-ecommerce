// Dependências
import mongoose from "mongoose";

// Esquema
const product_category = mongoose.model("product_category");

// Instanciação do controlador
const product_category_controller = {};



// Post
product_category_controller.post = async (req, res) => {
    try{
        const item = new product_category(req.body);
        await item.save();
        res.status(201).send({
            message: "New product_category registered successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to register a new product_category.", 
            data: e
        });
    }
};



// Put
product_category_controller.put = async (req, res) => {
    try{
        await product_category.findOneAndUpdate(
            {
                active: true, 
                product: req.params.product, 
                category: req.params.category
            }, 
            { $set: {
                product: req.body.product, 
                category: req.body.category
            } }
        );
        res.status(201).send({
            message: "Updated product_category successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to update product_category.", 
            data: e
        });
    }
};



// Delete
product_category_controller.delete = async (req, res) => {
    try{
        await product_category.findOneAndRemove ({
            active: true, 
            product: req.params.product, 
            category: req.params.category, 
        });
        res.status(200).send({
            message: "Removed product_category successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove product_category.", 
            data: e
        });
    }
};



// Delete all from product
product_category_controller.delete_all_from_product = async (req, res) => {
    try{
        await product_category.remove ({
            active: true, 
            product: req.params.product
        });
        res.status(200).send({
            message: "Removed product_categories successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove product_categories.", 
            data: e
        });
    }
};



// Get
product_category_controller.get = async (req, res) => {
    try{
        const data = await product_category.findOne({
            active: true, 
            product: req.params.product, 
            category: req.params.category
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get product_category.", 
            data: e
        });
    }
};



// Get all
product_category_controller.get_all = async (_, res) => {
    try{
        const data = await product_category.find({active: true});
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get product_categories.", 
            data: e
        });
    }
};



// Get all from product
product_category_controller.get_all_from_product = async (req, res) => {
    try{
        const data = await product_category.find({
            active: true, 
            product: req.params.product
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get product_categories.", 
            data: e
        });
    }
};



// Exportação do controlador
export default product_category_controller;