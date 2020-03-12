require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`hello you're on PORT ${PORT}`));
