/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// Dynamisch die Config-Datei für die aktuelle Umgebung laden
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  // Falls Umgebungsvariablen für die Datenbankverbindung genutzt werden
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Standardverbindung basierend auf der config.json
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Alle Dateien im Ordner `models` laden
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && // Ignoriere versteckte Dateien
      file !== basename && // Ignoriere die index.js selbst
      file.slice(-3) === '.js' && // Nur .js-Dateien
      file.indexOf('.test.js') === -1 // Ignoriere Testdateien
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Model registrieren
  });

// Beziehungen zwischen Modellen definieren (falls vorhanden)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // Sequelize-Instanz hinzufügen
db.Sequelize = Sequelize; // Sequelize-Klasse hinzufügen

module.exports = db;
