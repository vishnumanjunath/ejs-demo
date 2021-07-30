const express = require('express');
const router = require('./routes');
const app = express();

// to serever static files
app.use( express.static( "public" ) );

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(router);

app.listen(8080);
