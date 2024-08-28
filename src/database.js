import mongoose from "mongoose";

const db = "MongoDB"

mongoose.connect("mongodb+srv://faustowm:coderhouse@cluster0.zx4tj.mongodb.net/InzaraAromas?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log(`¡ Conectado ! - ${db}`))
    .catch((error) => console.log(`¡ Error ! - ${db}`, error))
