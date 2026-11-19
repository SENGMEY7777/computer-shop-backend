const db = require('../config/database');

class OrderItemModel {
    async getItems(orderId) {
        const [rows] = await db.query('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
        return rows;
    }
}

module.exports = new OrderItemModel();
