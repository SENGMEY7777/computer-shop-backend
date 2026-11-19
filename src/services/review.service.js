const db = require('../config/database');

class ReviewService {
    async getReviews() {
        const [rows] = await db.query('SELECT * FROM reviews');
        return rows;
    }
}

module.exports = new ReviewService();
