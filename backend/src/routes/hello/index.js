const { Router } = require('express');
const { helloController } = require('../../controller/hello');

const helloRoute = Router();

// Definiert die Route für den `/hello`-Endpoint
helloRoute.get('/hello', helloController);

module.exports = helloRoute; // Kein Objekt nötig, direkt die Route exportieren
