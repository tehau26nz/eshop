import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Import the pg client from your pg.js file
import pgClient from './pg.js';

app.get('/', (req, res) => {
    res.send('API is running ...');
});

// Replace product data with database queries
app.get('/api/products', async (req, res) => {
    try {
        const result = await pgClient.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pgClient.query('SELECT * FROM products WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

// Health check endpoint
app.get('/healthcheck', async (req, res) => {
    try {
        await pgClient.query('SELECT 1');
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Database connection failed' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));