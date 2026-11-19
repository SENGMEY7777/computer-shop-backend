const db = require('../config/database');

class OrderModel {
    async findOrders(userId) {
        const [rows] = await db.query('SELECT * FROM orders WHERE user_id = ?', [userId]);
        return rows;
    }
}

module.exports = new OrderModel();
