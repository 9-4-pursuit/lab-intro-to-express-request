const app = require ("./app")

require ("dotenv").config();
const PORT = process.env.PORT;

console.log("Server.js running");
console.log(PORT)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})