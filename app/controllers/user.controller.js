// Dependências
import db from "../config/models.config.js";

// Esquema
const user = db.mongoose.model("user");

// Instanciação do controlador
const user_controller = {};



// Post
user_controller.post = async (req, res) => {
    try{
        const item = new user(req.body);
        await item.save();
        res.status(201).send({
            message: "New user registered successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to register a new user.", 
            data: e
        });
    }
};



// Put (by id)
user_controller.put_by_id = async (req, res) => {
    try{
        await user.findOneAndUpdate(
            {
                active: true, 
                id: req.params.id
            }, 
            { $set: {
                id: req.body.id, 
                email: req.body.email, 
                name: req.body.name, 
                password: req.body.password, 
                phone_number: req.body.phone_number, 
                birth_date: req.body.birth_date, 
                role: req.body.role
            } }
        );
        res.status(201).send({
            message: "Updated user successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to update user.", 
            data: e
        });
    }
};



// Put (by email)
user_controller.put_by_email = async (req, res) => {
    try{
        await user.findOneAndUpdate(
            {
                active: true, 
                email: req.params.email
            }, 
            { $set: {
                id: req.body.id, 
                email: req.body.email, 
                name: req.body.name, 
                password: req.body.password, 
                phone_number: req.body.phone_number, 
                birth_date: req.body.birth_date, 
                role: req.body.role
            } }
        );
        res.status(201).send({
            message: "Updated user successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to update user.", 
            data: e
        });
    }
};



// Delete (by id)
user_controller.delete_by_id = async (req, res) => {
    try{
        await user.findOneAndRemove ({
            active: true, 
            id: req.params.id
        });
        res.status(200).send({
            message: "Removed user successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove user.", 
            data: e
        });
    }
};



// Delete (by email)
user_controller.delete_by_email = async (req, res) => {
    try{
        await user.findOneAndRemove ({
            active: true, 
            email: req.params.email
        });
        res.status(200).send({
            message: "Removed user successfully."
        });
    }catch(e){
        res.status(400).send({
            message: "Failed to remove user.", 
            data: e
        });
    }
};



// Get (by id)
user_controller.get_by_id = async (req, res) => {
    try{
        const data = await user.findOne({
            active: true, 
            id: req.params.id
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get user.", 
            data: e
        });
    }
};



// Get (by email)
user_controller.get_by_email = async (req, res) => {
    try{
        const data = await user.findOne({
            active: true, 
            email: req.params.email
        });
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get user.", 
            data: e
        });
    }
};



// Get all
user_controller.get_all = async (_, res) => {
    try{
        const data = await user.find({active: true});
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({
            message: "Failed to get users.", 
            data: e
        });
    }
};



// Exportação do controlador
export default user_controller;