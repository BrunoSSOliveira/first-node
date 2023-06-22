import winston from "winston";
// const winston = require("winston");

const logger = winston.createLogger({
   format: winston.format.combine(
      winston.format.timestamp({format: "DD/MM/YYYY HH:mm:ss"}),
      winston.format.json()
   ),
   transports: [
      new winston.transports.Console(),
      new winston.transports.File({
         filename: "logs/error.log",
         level: "error"
      }),
      new winston.transports.File({
         filename: "logs/app.log",
         level: "info"
      })
   ]
});

export default logger