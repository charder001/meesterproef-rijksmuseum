const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
var chrono = require('chrono-node');
const moment = require('moment');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

require('./routes')(app);



server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
