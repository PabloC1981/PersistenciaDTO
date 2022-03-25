import mongoose from "mongoose";

export default class MongoClient{
    constructor(){
        this.connected = true,
        this.client = mongoose
    }
    connect = async()=>{
        try{
            await this.client.connect('mongodb+srv://pablo:pascual1@lavoro.elux2.mongodb.net/ecommerce?retryWrites=true&w=majority',{
            userNewUrlParser:true,
            useUnifiedTopology:true})    
        }catch(err){
            throw new Error ('Can´t connect')
        }
    } 
}