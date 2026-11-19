const db = require('../config/database');

class ReviewModel {
    async findByProduct(productId) {
        const [rows] = await db.query('SELECT * FROM reviews WHERE product_id = ?', [productId]);
        return rows;
    }
}

module.exports = new ReviewModel();
