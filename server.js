const app = require('./app'); // Import the app from app.js
const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file
const port = process.env.PORT; // Set the port to either the environment variable PORT or 3000
const mongoose = require("mongoose");   


// DataBase Connection 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connection to MongoDB!'))
    .catch(() => console.log('MongoDB Connection Failed!'))

app.listen(port, () => {
    console.log(`Listening on port ${port}....`); 
})