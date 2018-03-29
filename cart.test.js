const
    cart = require('./cart'),
    cars = require('./data/cars');

describe('Cart Properties:', () => {
    test('Cart is empty array', () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });

    test('Total = 0', () => {
        expect(cart.total).toEqual(0);
    });
});

describe('Cart Methods:', () => {
    afterEach(() => {
        cart.cart  = [];
        cart.total = 0;
    });

    test('Test addToCart in adding to cart', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[10]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[10]);
    });

    test('Test addToCart for increasing total', () => {
        cart.addToCart(cars[0]);

        expect(cart.total).toEqual(cars[0].price);
    });

    test('Test removeFromCart to take away from cart', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.removeFromCart(cars[0]);

        expect(cart.cart.length).toEqual(1);
        expect(cart.cart[0]).toEqual(cars[1]);
    });

    test('Test removeFromCart to reduce total', () => {
        cart.addToCart(cars[0]);
        cart.removeFromCart(cars[0]);
        
        expect(cart.total).toEqual(0);
    });

    test('Test checkout', () => {
        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(Array.isArray(cart.cart)).toEqual(true);
    });
});