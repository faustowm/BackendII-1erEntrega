import express from "express";
import { Router } from "express";
import productManager from "../managers/productManager.js";

const router = express.Router();
const viewsRouter = Router();

router.get("/products", async (req, res) => {
    try {
        const productos = await productManager.getProducts();
        res.render("home", { productos });
    } catch (error) {
        console.error("Error al obtener los productos: ", error);
        res.status(500).send("Error al obtener los productos");
    }
});

router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
});

router.get('/products/add', (req, res) => {
    res.render('addProduct');
});

export { router as viewsRouter };
