import dotenv  from 'dotenv';
dotenv.config({ path: "./config.env" });
import express from "express";
import {globalErrorHandler, AppError} from "./utils/index.js";
import cors from 'cors';
import mongoConnect from "./db/mongoConnection.js";
import {bookRouter} from "./routes/index.js";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
  })
);

app.use(express.json());

app.use("/v1/book", bookRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

let server;
mongoConnect().then(() => {
  server = app.listen(process.env.PORT, () => {
    console.info(`Listening to port ${process.env.PORT}`);
  });
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error.message);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) {
    server.close();
  }
});



