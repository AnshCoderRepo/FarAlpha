const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// Serve static UI
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User.' });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

module.exports = app;