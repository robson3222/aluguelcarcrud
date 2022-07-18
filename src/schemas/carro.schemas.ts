import * as mongoose from 'mongoose';

export const CarroSchema = new mongoose.Schema({
    marca:String, 
    alugado:Boolean, 
    nome: String,
    local: String
})