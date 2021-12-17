import express from 'express'
import routes from './src/routes/routes.js'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
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
routes(app)

//*** RUN SERVER ***//
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})