import mongoose from "mongoose";
import usersModel from "../models/usersModel.js";

export default class UserDaoDB {
    constructor(){
        this.model = mongoose.model(usersModel.collectionName,usersModel.schema)
    }
    getAll = async() =>{
        let result = await this.model.find()
        return result
    }
    save = async(user) =>{
        let result = await this.model.create(user)
        return result;

    }
}