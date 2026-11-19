const db = require('../config/database');

class DashboardService {
    async getStats() {
        return { status: 'ok' };
    }
}

module.exports = new DashboardService();
