import {AppError} from "./index.js";

const handleCastErrorDB = (err) => {
  return new AppError(`Invalid ${err.path}: ${err}`, 400);
};


const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/);
  return new AppError(`Duplicate Field value: ${value}, Please use another value`, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  return new AppError(`Invalid input data: ${errors.join('. ')}`, 400);
};

const sendErrorDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    msg: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      msg: err.message,
    });
  } else {
    return res.status(500).json({
      status: "error",
      msg: `Something went very wrong!`,
    });
  }
};

export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  let error = Object.create(err);
  if (error.name === "CastError") error = handleCastErrorDB(error);
  if (error.code === 11000) error = handleDuplicateFieldsDB(error);
  if (error.name === "validationError")
    error = handleValidationErrorDB(error);
  if (process.env.ERROR_RESPONSE_TYPE === 'dev') {
    sendErrorDev(error, res);
  } else if (process.env.ERROR_RESPONSE_TYPE === "prod") {
    sendErrorProd(error, res);
  }
};
