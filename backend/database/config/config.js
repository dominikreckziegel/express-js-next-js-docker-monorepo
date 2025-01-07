// Lädt Umgebungsvariablen aus der .env-Datei
require('dotenv').config();

// Exportiert die Konfiguration für Sequelize
module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE || 'animal_network',
    username: process.env.DB_USER || 'animal_network_admin',
    password: process.env.DB_PASSWORD || 'Skeileit30kam!!',
    logging: console.log, // Optional: Logs SQL-Statements in der Entwicklung
  },
  test: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_TEST_DATABASE || 'animal_network_test', // Separate Test-Datenbank
    username: process.env.DB_USER || 'animal_network_admin',
    password: process.env.DB_PASSWORD || 'Skeileit30kam!!',
    logging: false, // Keine SQL-Logs während Tests
  },
  production: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE || 'animal_network',
    username: process.env.DB_USER || 'animal_network_admin',
    password: process.env.DB_PASSWORD || 'Skeileit30kam!!',
    logging: false, // Deaktiviert SQL-Logs in der Produktion
    pool: {
      max: 5, // Maximale Verbindungen
      min: 0, // Minimale Verbindungen
      acquire: 30000, // Maximale Zeit (ms), um eine Verbindung zu erhalten
      idle: 10000, // Maximale Zeit (ms), bevor eine Verbindung geschlossen wird
    },
  },
};
