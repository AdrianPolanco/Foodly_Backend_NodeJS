const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./utils/connection");
const v1Router = require("./routes/v1Router");
const app = express();

dotenv.config();
const { PORT, MONGO_URL } = process.env;
const port = PORT || 6013;

connect(MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use("/api/v1", v1Router);

app.listen(port, () =>
    console.log(`Foodly backend server listening on port ${port}!`)
);
