const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.locals.cart = { total: 0 }; // Use app.locals to store the cart

app.post('/add-to-cart', (req, res) => {
    const { itemId, price, quantity } = req.body;
    if (!itemId || !price || !quantity) {
        return res.status(400).json({ error: 'Missing item details' });
    }
    app.locals.cart.total += price * quantity; // Update the cart total
    res.status(200).json(app.locals.cart);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
