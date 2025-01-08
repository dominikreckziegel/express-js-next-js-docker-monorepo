const path = require('path');
const { config } = require('dotenv');

// Lade .env-Variablen
config();

// Bestimme die Umgebung (default: development)
const env = process.env.NODE_ENV || 'development';

// Lade die passende JSON-Konfigurationsdatei
const envConfig = require(path.resolve(__dirname, `${env}.json`));

// Kombiniere die Konfigurationen
const configuration = {
  server: {
    port: process.env.PORT || envConfig.server.port || 4000, // Priorität: .env > JSON > Standardwert
  },
  database: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || 'animal_network',
    username: process.env.DB_USER || 'animal_network_admin',
    password: process.env.DB_PASSWORD || '',
  },
};

module.exports = configuration; // Direkter Export
