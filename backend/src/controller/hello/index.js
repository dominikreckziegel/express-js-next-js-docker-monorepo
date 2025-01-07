const helloController = (req, res) => {
  try {
    return res.status(200).json({ message: 'Helloworld' });
  } catch (error) {
    console.error('Error in helloController:', error); // Loggen des Fehlers
    return res.status(500).json({ error: 'Internal Server Error' }); // Generische Fehlermeldung
  }
};

module.exports = { helloController };
