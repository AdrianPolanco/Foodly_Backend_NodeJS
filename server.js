const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./utils/connection");

const app = express();

dotenv.config();
const { PORT, MONGO_URL } = process.env;
const port = PORT || 6013;

connect(MONGO_URL);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
    console.log(`Foodly backend server listening on port ${port}!`)
);
