const db = require('../config/database');

const Brand = {
    create: async (data) => {
        const [result] = await db.execute('INSERT INTO brands (name, slug) VALUES (?, ?)', [data.name, data.slug]);
        return result.insertId;
    },
    findById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM brands WHERE id = ?', [id]);
        return rows[0];
    },
    findAll: async () => {
        const [rows] = await db.execute('SELECT * FROM brands');
        return rows;
    }
};

module.exports = Brand;