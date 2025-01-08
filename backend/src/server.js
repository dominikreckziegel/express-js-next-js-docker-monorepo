const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index'); // Importiere die Haupt-Routen-Datei

const app = express();

// Middleware
app.use(cors()); // Erlaubt Cross-Origin-Anfragen vom Frontend
app.use(bodyParser.json()); // Zum Parsen von JSON-Daten
app.use(bodyParser.urlencoded({ extended: true })); // Zum Parsen von URL-encoded-Daten

// Routen
app.use('/', routes);

// Server starten
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
