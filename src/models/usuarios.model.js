import mongoose, { mongo } from "mongoose";

const usuariosCollection ="usuarios";

const usuarioSchema = new mongoose.Schema ({
    nombre: String, 
    apellido: String,
    edad: Number
})

const UsuarioModel = mongoose.model(usuariosCollection, usuarioSchema);

export default UsuarioModel;