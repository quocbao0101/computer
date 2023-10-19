import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import morgan from 'morgan';
import unless from 'express-unless';
import authenticateToken from './src/middlewares/authenticate.js';
import { errorHandler } from './src/middlewares/error.js';
// router
import authRouter from './src/routes/auth.js';
//

const app = express()
authenticateToken.unless = unless;
authenticateToken.unless = () => ({path: ['/signin'] });
app.use(errorHandler);
const port = 8080


// config mongo
const URL = process.env.MONGODB_URL;
const connectDB = async () => {
    try {
      await mongoose.connect(
        URL,
        { useNewUrlParser: true, useUnifiedTopology: true, name: '' }
      )
      console.log('Connected to mongoDB')
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
connectDB();
// config
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
//


// routes 
app.use("/api/auth", authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})