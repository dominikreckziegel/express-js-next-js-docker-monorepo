const { Router } = require('express');
const router = Router();

// POST-Route für die Registrierung
router.post('/', (req, res) => {
  const { firstName, lastName, email, profileType, password, birthdate, gender } = req.body;

  // Beispiel: Daten validieren und speichern
  console.log('Registrierungsdaten:', {
    firstName,
    lastName,
    email,
    profileType,
    password,
    birthdate,
    gender,
  });

  // Hier könntest du die Daten in einer Datenbank speichern
  // z. B. mit Mongoose (MongoDB)
  // const newUser = new User({ firstName, lastName, email, ... });
  // await newUser.save();

  // Antwort senden
  res.status(200).json({ message: 'Registration successful!' });
});

module.exports = router;
