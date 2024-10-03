import express from 'express';
import CartManager from '../dao/db/cart-manager-db.js';
import ProductManager from '../dao/db/product-manager-db.js';

const router = express.Router();
const cartManager = new CartManager();
const productManager = new ProductManager();

// Ruta para obtener todos los productos con paginación, orden y filtrado
router.get('/', async (req, res) => {
    try {
        const { limit, page, sort, query } = req.query;
        const products = await productManager.getProducts({
            limit: parseInt(limit, 10) || 10,
            page: parseInt(page, 10) || 1,
            sort,
            query
        });
        res.json(products); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Ruta para obtener un producto específico por ID
router.get('/:pid', async (req, res) => {
    const id = req.params.pid;

    try {
        const product = await productManager.getProductById(id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.json(product);
    } catch (error) {
        console.error("Error getting product", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// Ruta para agregar un producto
router.post('/', async (req, res) => {
    const newProduct = req.body;

    try {
        await productManager.addProduct(newProduct);
        res.status(201).json({
            message: "Product added successfully"
        });
    } catch (error) {
        console.error("Error adding product", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// Ruta para actualizar un producto por ID
router.put('/:pid', async (req, res) => {
    const id = req.params.pid;
    const updatedProduct = req.body;

    try {
        const updated = await productManager.updateProduct(id, updatedProduct);
        if (!updated) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.json({
            message: "Product updated successfully"
        });
    } catch (error) {
        console.error("Error updating product", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// Ruta para eliminar un producto por ID
router.delete('/:pid', async (req, res) => {
    const id = req.params.pid;

    try {
        const deleted = await productManager.deleteProduct(id);
        if (!deleted) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting product", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// Ruta para agregar un producto al carrito
router.post('/addProduct', async (req, res) => {
    const { productId, cartId } = req.body;

    if (!productId || !cartId) {
        return res.status(400).json({ error: 'Product ID and Cart ID are required' });
    }

    try {
        // Verificar si el carrito existe
        const cart = await cartManager.getCartById(cartId);
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Verificar si el producto existe
        const product = await productManager.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Agregar producto al carrito
        await cartManager.addProductToCart(cartId, productId);

        res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
