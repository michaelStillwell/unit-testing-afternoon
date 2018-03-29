const cars = require('./data/cars');

module.exports = {
	cart: [],
	total: 0,

	addToCart: function(car) {
		this.cart.push(car);
		this.total += car.price;
	},

	removeFromCart: function(car) {
		this.cart.splice(this.cart.findIndex(x => x.id === car.id), 1);
		this.total -= car.price;
	},

	checkout: function() {
		this.cart = [];
		this.total = 0;
	}
};