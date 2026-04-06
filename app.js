
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middlewares/error.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use(express.json());

// routes
app.use('/api/users', userRoutes);

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// error middleware
app.use(errorHandler);

module.exports = app;
