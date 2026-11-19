const db = require('../config/database');

class CategoryModel {
    async findAll() {
        const [rows] = await db.query('SELECT * FROM categories');
        return rows;
    }
}

module.exports = new CategoryModel();
