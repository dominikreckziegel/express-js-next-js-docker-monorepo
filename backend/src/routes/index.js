const { Router } = require('express');
const helloRoute = require('./hello'); // Deine bestehende `/hello`-Route
const registerRoute = require('./register'); // Neue `/register`-API-Route

const routes = Router();

// Root-Route definieren
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Animal Network API!' });
});

// Neue Routen hinzufügen
routes.use('/hello', helloRoute);      // `/hello`-Route
routes.use('/register', registerRoute); // `/register`-API-Route

module.exports = routes;
