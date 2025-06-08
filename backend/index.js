// backend/index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Big Vision RV API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
