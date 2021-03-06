const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

const productsRoutes = require("./routes/products");

app.use("/products", productsRoutes);


/** 404 handler */

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  if (err.stack) console.log(err.stack);

  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});


module.exports = app;