const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('puerto', process.env.port || 3000);

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/empleados",require('./rutas/empleados.rutas'));

module.exports = app;