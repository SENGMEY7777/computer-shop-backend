const db = require('../config/database');

class CartModel {
    async getCart(userId) {
        const [rows] = await db.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
        return rows;
    }
}

module.exports = new CartModel();
