const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static('client'));

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
