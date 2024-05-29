const request = require('supertest');
const { app, server } = require('./server');

beforeEach(() => {
    // Reset the cart to ensure each test starts with a fresh cart
    app.locals.cart = { total: 0 };
});

afterAll(done => {
    server.close(done);
});

describe('POST /add-to-cart', () => {
    it('should add item to the cart and update the total', async () => {
        const response = await request(app)
            .post('/add-to-cart')
            .send({ itemId: 1, price: 100, quantity: 2 });

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(200);
    });

    it('should return a 400 error if item details are missing', async () => {
        const response = await request(app)
            .post('/add-to-cart')
            .send({ price: 100, quantity: 2 });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Missing item details');
    });

    it('should accumulate the total correctly when multiple items are added', async () => {
        // Add the first item
        let response = await request(app)
            .post('/add-to-cart')
            .send({ itemId: 1, price: 100, quantity: 2 });

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(200);

        // Add another item
        response = await request(app)
            .post('/add-to-cart')
            .send({ itemId: 2, price: 50, quantity: 3 });

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(350); // 200 + (50 * 3)
    });
});
