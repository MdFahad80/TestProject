const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const StudentRouter = require("./routes/StudentRouter");
const UserRouter = require("./routes/UserRouter");

// DataBase Connection 
mongoose.connect('mongodb://localhost:27017/my-student')
    .then(() => console.log('Connection to MongoDB!'))
    .catch(() => console.log('MongoDB Connection Failed!'))

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/students', StudentRouter);
app.use('/api/user', UserRouter);

app.get('/', (req, res) => {
    res.send(JSON.stringify({Student: [{id: 1, name: "tara mera", class: 10}, {id: 2, name: "baka tera", class: 19}]}))
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}....`); 
})