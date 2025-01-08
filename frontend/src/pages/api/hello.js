export default function handler(req, res) {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Animal Network API!',
  });
}
