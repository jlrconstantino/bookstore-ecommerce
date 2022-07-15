// Dependências
import db from "../config/models.config.js";

// Esquema
const product = db.mongoose.model("product");

// Instanciação do controlador
const product_controller = {};



// Post
product_controller.post = async (req, res) => {
    try{
        const item = new product(req.body);
        await item.save();
        res.status(201).send({
            message: "New product registered successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to register a new product.", 
            data: e
        });
    }
};



// Put
product_controller.put = async (req, res) => {
    try{
        await product.findOneAndUpdate(
            {
                active: true, 
                id: req.params.id
            }, 
            { $set: {
                id: req.body.id, 
                title: req.body.title, 
                price: req.body.price, 
                stock: req.body.stock, 
                rating: req.body.rating, 
                sales: req.body.sales, 
                author: req.body.author, 
                publisher: req.body.publisher, 
                finishing: req.body.finishing, 
                year: req.body.year, 
                language: req.body.language, 
                pages: req.body.pages, 
                description: req.body.description, 
                image_source: req.body.image_source, 
            } }
        );
        res.status(201).send({
            message: "Updated product successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to update product.", 
            data: e
        });
    }
};



// Delete (by id)
product_controller.delete_by_id = async (req, res) => {
    try{
        await product.findOneAndRemove ({
            active: true, 
            id: req.params.id, 
        });
        res.status(200).send({
            message: "Removed product successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove product.", 
            data: e
        });
    }
};



// Delete (by title)
product_controller.delete_by_title = async (req, res) => {
    try{
        await product.findOneAndRemove ({
            active: true, 
            title: req.params.title, 
        });
        res.status(200).send({
            message: "Removed product successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove product.", 
            data: e
        });
    }
};



// Get (by id)
product_controller.get_by_id = async (req, res) => {
    try{
        const data = await product.findOne({
            active: true, 
            id: req.params.id, 
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get product.", 
            data: e
        });
    }
};



// Get (by title)
product_controller.get_by_title = async (req, res) => {
    try{
        const data = await product.findOne({
            active: true, 
            title: req.params.title, 
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get product.", 
            data: e
        });
    }
};



// Get all
product_controller.get_all = async (_, res) => {
    try{
        const data = await product.find({active: true});
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get products.", 
            data: e
        });
    }
};



// Exportação do controlador
export default product_controller;