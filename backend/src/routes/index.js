const { Router } = require('express');
const helloRoute = require('./hello'); // Deine bestehende `/hello`-Route

const routes = Router();

// Root-Route definieren
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Animal Network API!' });
});

// Bestehende Routen hinzufügen
routes.use(helloRoute);

module.exports = routes;
