require("dotenv").config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => {console.log("DATABASE CONNECTED SUCCESSFULLY!")})
.catch(err => {console.log(err)});

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// ROUTES
app.use("/api", authRoutes);

// PORT
const port = process.env.PORT || 8000;

// STARTING SERVER
app.listen(port, () => {
    console.log(`App is running at ${port}`);
})