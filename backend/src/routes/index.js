const { Router } = require('express');
const helloRoute = require('./hello'); // Kein `/index` nötig, wird automatisch erkannt

const routes = Router();

// Alle Routen registrieren
routes.use(helloRoute);

module.exports = routes; // Direkter Export der Routes
