require('dotenv').config();
const importedApp = require('./src/server');
const app = importedApp?.default || importedApp?.app || importedApp;
const PORT = Number(process.env.PORT) || 5001;

if (!app || typeof app.listen !== 'function') {
    throw new TypeError('The Express app module must export an app with a listen() method.');
}

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = server;
