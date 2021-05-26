const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/api-sistema', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then((db) => console.log('Base de datos conectada'))
    .catch(err => console.error(err));