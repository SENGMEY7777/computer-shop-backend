const db = require('../config/database');

class BrandService {
    async getAllBrands() {
        const [rows] = await db.query('SELECT * FROM brands');
        return rows;
    }
}

module.exports = new BrandService();
