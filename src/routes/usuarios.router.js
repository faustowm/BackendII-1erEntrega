import { Router } from "express";
const router = Router();

//IMPORTACION DEL MODEL

import UsuarioModel from "../models/usuarios.model.js";

//Listado de clientes
router.get("/", async (req, res) => {
  try {
    const listadoUsuarios = await UsuarioModel.find();
    res.json(listadoUsuarios);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
});

//Nuevo usuario por postman
router.post("/", async (req, res) => {
  const nuevoUsuario = req.body;
  try {
    const documentoUser = new UsuarioModel(nuevoUsuario);
    await documentoUser.save();
    res.send({ message: "Usuario guardado", usuario: documentoUser });
  } catch (error) {
    res
      .status(500)
      .send("Error al crear usuario nuevo, vuelva a intentarlo, gracias!");
  }
});

//Actualizar usuario por ID
router.put("/:id", async (req, res) =>{
    try {
        const user = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body);
        if(!user){
            return res.status(404).send("Cliente no encontrado")
        }
        res.status(201).send({message: "Actualizacion del usuario con exito"})
    } catch (error) {
        res.status(500).send("Error en el servidor")
    }
})

//Eliminar Cliente
router.delete("/:id", async (req, res) =>{
    try {
        const user = await UsuarioModel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send("Cliente no encontrado")
        }
        res.send("Usuario eliminado con exito")
    } catch (error) {
        res.status(500).send("Error en el servidor");
    }
})
export default router;
