const app = require("./app.js")
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}. Welcome to the lab.`);
});