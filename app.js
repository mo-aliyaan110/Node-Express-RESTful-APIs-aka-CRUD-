const Express = require('express');
const app = new Express();
const mongoose = require('mongoose');
require('dotenv/config');
const getRouter = require('./routes/get');
const usersRouter = require('./routes/post');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// let's use the middleware
app.use('/users', getRouter);
app.use('/addUser', usersRouter);




// connecting the database
mongoose.connect(process.env.DB_URL, () => {
    console.log("Successfully connected to the Database.")
})





app.listen(4000, () => {
    console.log("Server is running on port 4000");
})