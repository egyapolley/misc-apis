const express = require("express");
const router = require("./route");

const helmet = require("helmet");

require("dotenv").config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


let PORT = process.env.PORT;
let HOST = process.env.HOST;

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running  on url : http://${HOST}:${PORT}`)
})










