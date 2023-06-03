import { handleErrors } from "../db/errors.js";
import { todoModel } from "../models/todo.model.js";

const getAll = async(req,res) => {
    try {
        const result = await todoModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {titulo, img, descripcion, likes} = req.body;
    try {
        const result = await todoModel.create({titulo, img, descripcion, likes});
        return res.status(201).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};


const update = async(req,res) => {
    const {id} = req.params;
    const {titulo, img, descripcion, likes} = req.body;
    try {
        const result = await todoModel.update(id, {titulo, img, descripcion, likes});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await todoModel.remove(id);
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

export const todoController = {
    getAll,
    create,
    update,
    remove,
};