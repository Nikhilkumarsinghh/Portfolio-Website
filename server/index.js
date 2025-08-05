// server/index.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Contact form route
app.post("/api/contact", (req, res) => {
  console.log("📨 Contact form data received:", req.body);

  // You can add database saving or email logic here
  res.status(200).json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
