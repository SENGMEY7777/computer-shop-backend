const db = require('../config/database');

class UserModel {
    async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }
}

module.exports = new UserModel();
