const db = require('../config/database');

class PaymentModel {
    async getPayment(orderId) {
        const [rows] = await db.query('SELECT * FROM payments WHERE order_id = ?', [orderId]);
        return rows;
    }
}

module.exports = new PaymentModel();
