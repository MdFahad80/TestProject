const express = require("express");
const app = express();
const morgan = require("morgan");
const StudentRouter = require("./routes/StudentRouter");
const UserRouter = require("./routes/UserRouter");
const AuthRouter = require("./routes/AuthRouter");
// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/students', StudentRouter);
app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);

app.get('/', (req, res) => {
    res.send(JSON.stringify({Student: [{id: 1, name: "tara mera", class: 10}, {id: 2, name: "baka tera", class: 19}]}))
  })

module.exports = app;