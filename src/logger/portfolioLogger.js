const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const portfolioLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(format.json(),
      timestamp(),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "errorLog.log" })
    ],
  });
}

module.exports = portfolioLogger;