const express = require("express");
const  mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Connected to MongoDB'))
.catch((err)=> console.log('MongoDB Connection Error', err));


////////////// ROUTES //////////////

const instituteRoutes = require('./routes/instituteRoutes');
app.use('/api/institute', instituteRoutes);

const port = process.env.PORT||3000;
app.listen(port, () => console.log(`SERVER RUNNINNG ON ${port}`))