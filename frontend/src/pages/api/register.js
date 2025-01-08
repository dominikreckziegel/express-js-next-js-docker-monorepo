export default function handler(req, res) {
    if (req.method === 'POST') {
      const { firstName, lastName, email, profileType, password, birthdate, gender } = req.body;
  
      // Hier kannst du Daten validieren und z.B. in der Datenbank speichern
      console.log('Registrierungsdaten:', {
        firstName,
        lastName,
        email,
        profileType,
        password,
        birthdate,
        gender,
      });
  
      // Antwort an den Client
      res.status(200).json({ message: 'Registration successful!' });
    } else {
      // Nur POST-Anfragen zulassen
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }
  