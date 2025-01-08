const express = require('express');

const app = express();

// JSON-Parser-Middleware
app.use(express.json());

// Middleware-Registrierung oder weitere Konfiguration hier...

module.exports = app;
