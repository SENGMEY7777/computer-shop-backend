const db = require('../config/database');

class InventoryModel {
    async getStock(productId) {
        const [rows] = await db.query('SELECT * FROM inventory WHERE product_id = ?', [productId]);
        return rows;
    }
}

module.exports = new InventoryModel();
