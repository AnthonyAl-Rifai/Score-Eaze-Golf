const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const cors = require('cors');

const startServer = () => {
  console.log('successfully connected to database');

  const app = express();
  const PORT = process.env.PORT || 8081;
  app.use(cors({ origin: '*' }));
  app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../client'))); // handles requests for static files
  app.use('/api', apiRouter);

  app.use((req, res) =>
    res.status(404).send("This is not the page you're looking for...")
  );

  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

mongoose
  .connect('mongodb://localhost:27017/scoreeazegolf', { useNewUrlParser: true })
  .then(startServer)
  .catch((error) => {
    console.log('failed to connect to database', error);
  });
