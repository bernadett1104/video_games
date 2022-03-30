require("dotenv").config();
const express = require("express");
const app = express();
const appPort = process.env.APP_PORT
const userRouter = require("./api/users/user.router");
var cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));


// Json-al kommunikálni tudjon
app.use(express.json());
app.use("/api", userRouter);

app.listen(appPort, () => {
    console.log(`http://localhost:${appPort}`);
})