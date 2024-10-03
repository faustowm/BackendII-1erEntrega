import ProductManager from '../dao/db/product-manager-db.js';
import CartManager from '../dao/db/cart-manager-db.js';

export const getProducts = async (req, res) => {
    try {
        const products = await ProductManager.getProducts();
        const carts = await CartManager.getAllCarts(); 
        res.render('products', { productos: products, carts: carts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
};