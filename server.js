const app = require("./app")

require("dotenv").config();
const PORT = process.env.PORT;

app.listen( PORT, (_,__) => {
    console.log(`Welcome to our lab for today! on PORT: ${PORT}`)
})