const portfolioLogger = require('./portfolioLogger');

let logger = portfolioLogger();

// if (process.env.NODE_ENV !== 'production') {
//   logger = portfolioLogger();
// }

module.exports = logger;