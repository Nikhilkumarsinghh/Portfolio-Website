const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form received:", { name, email, message });
  // You can save to DB or send email here
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
