import express from "express";
import ProductManager from "../dao/db/product-manager-db.js";
import CartManager from "../dao/db/cart-manager-db.js";

const router = express.Router();
const productManager = new ProductManager();
const cartManager = new CartManager();

// Ruta principal
router.get("/", (req, res) => {
    res.render("home");
});

// Ruta para obtener productos con paginación y ordenamiento
router.get("/products", async (req, res) => {
    try {
        const { page = 1, limit = 5, sort = 'asc', query = '' } = req.query;
        const validSort = ['asc', 'desc'].includes(sort) ? sort : 'asc';

        const productos = await productManager.getProducts({
            page: parseInt(page),
            limit: parseInt(limit),
            query,
            sort: validSort,
        });

        const nuevoArray = productos.docs.map((producto) => producto.toObject());

        res.render("products", {
            productos: nuevoArray,
            hasPrevPage: productos.hasPrevPage,
            hasNextPage: productos.hasNextPage,
            prevPage: productos.prevPage,
            nextPage: productos.nextPage,
            currentPage: productos.page,
            totalPages: productos.totalPages,
        });
    } catch (error) {
        console.error("Error getting products:", error);
        res.status(500).json({
            status: "error",
            error: "Internal Server Error",
        });
    }
});

// Ruta para obtener detalles de un producto específico
router.get("/products/:pid", async (req, res) => {
    try {
        const productId = req.params.pid;
        const product = await productManager.getProductById(productId);

        if (!product) {
            res.status(404).json({
                status: "error",
                error: "Product not found",
            });
            return;
        }

        res.render("productsDetails", { product });
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).json({
            status: "error",
            error: "Internal Server Error",
        });
    }
});

// Renderizar página para agregar productos
router.get("/products/add", (req, res) => {
    res.render("addProduct");
});

// Ruta para obtener todos los carritos
router.get("/carts", async (req, res) => {
    try {
        const carts = await cartManager.getAllCarts();
        res.render("carts", { carts });
    } catch (error) {
        console.error("Error retrieving carts:", error);
        res.status(500).render("error", { message: "Internal server error" });
    }
});

// Ruta para obtener detalles de un carrito específico
router.get("/carts/:cid", async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cart = await cartManager.getCartById(cartId);

        if (!cart) {
            return res.status(404).render("error", { message: "Cart not found" });
        }

        res.render("cartDetails", { cart });
    } catch (error) {
        console.error("Error retrieving cart details:", error);
        res.status(500).render("error", { message: "Internal server error" });
    }
});

// Define tus rutas de vista aquí
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req, res) => {
    res.render('home');
});

export default router;
