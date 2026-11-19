const db = require('../config/database');

class UserService {
    async getUsers() {
        const [rows] = await db.query('SELECT id, name, email FROM users');
        return rows;
    }
}

module.exports = new UserService();
