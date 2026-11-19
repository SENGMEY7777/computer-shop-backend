const db = require('../config/database');

class CategoryService {
    async getAllCategories() {
        const [rows] = await db.query('SELECT * FROM categories');
        return rows;
    }
}

module.exports = new CategoryService();
