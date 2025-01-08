const helloController = (req, res) => {
  try {
    return res.status(200).json({ message: 'Helloworld' });
  } catch (error) {
    console.error('Error in helloController:', error); // Fehler im Log ausgeben
    return res.status(500).json({ error: 'Internal Server Error' }); // Generische Fehlermeldung
  }
};

module.exports = helloController; // Direkter Export
