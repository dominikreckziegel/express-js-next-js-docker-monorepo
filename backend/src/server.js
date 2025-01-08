const path = require('path');
const app = require(path.resolve('src/app'));
const routes = require(path.resolve('src/routes'));
const configuration = require(path.resolve('src/config')); // Direkter Import der Konfiguration

console.log(`Running in ${process.env.NODE_ENV || 'development'} mode.`);

// Registriere die Routen als Middleware
app.use(routes);

// Fehlerbehandlungs-Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Server starten
app.listen(configuration.server.port, () => {
  console.log(`Server is running on port ${configuration.server.port}`);
});
