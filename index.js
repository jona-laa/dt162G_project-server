const express = require('express');
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config()
// Routes
const contentRoute = require('./src/routes/content')
const authRoute = require('./src/routes/auth')

const app = express()
const PORT = process.env.PORT || 4000;

/*** MIDDLEWARE ***/
app.use(express.json())
app.use(cors())
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});
app.use('/api/content/images', express.static(path.join(__dirname, '/src/routes/uploads')))
app.use(fileUpload());

/*** MONGOOSE MONGODB CONNECTION ***/
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_REMOTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to database...'))

/*** USE ROUTES ***/
app.use('/api/content', contentRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => res.send('Hello world!'))
//*** RUN SERVER ***//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})