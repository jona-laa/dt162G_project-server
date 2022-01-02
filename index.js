const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
// Routes
const contentRoute = require('./src/routes/content')
const authRoute = require('./src/routes/auth')

const app = express()
const PORT = 4000

/*** MIDDLEWARE ***/
app.use(express.json())
app.use(cors())
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});

/*** MONGOOSE MONGODB CONNECTION ***/
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_REMOTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to database...'))

/*** USE ROUTES ***/
app.use('/api/content', contentRoute);
app.use('/api/auth', authRoute);

//*** RUN SERVER ***//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})