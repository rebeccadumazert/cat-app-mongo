const catsRouter = require('./routes/catsRouter');

function routes(app) {
  app.use('/api/v1/cats', catsRouter);
}

module.exports = routes;
