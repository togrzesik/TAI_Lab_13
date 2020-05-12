'use strict';

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './REST/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const databaseUrl = "mongodb://tai:taitai1@ds147180.mlab.com:47180/tai";

mongoose.connect(databaseUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connect with database established');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

routes(app);
app.listen(3000, () => {
  console.info(`Server is running at 3000`)
});
