const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index'); // Importiere die Routen-Datei

const app = express();

// Middleware
app.use(cors()); // Erlaubt Cross-Origin-Anfragen
app.use(bodyParser.json()); // JSON-Parser
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded-Parser

// Routen registrieren
app.use('/', routes);

module.exports = app;
