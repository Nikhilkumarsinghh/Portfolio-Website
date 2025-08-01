const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contact", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
