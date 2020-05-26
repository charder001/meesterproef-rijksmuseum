const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rijksmuseum'
    })
})

app.get('/tickets', (req, res) => {
    res.render('ticket', {
        title: 'Rijksmuseum | Tickets'
    })
})


app.get('/ticketkeuze', (req, res) => {
    res.render('ticketkeuze', {
        title: 'Rijksmuseum | Tickets',
    })
})
                        
app.get('/extra', (req, res) => {
    res.render('extra', {
        title: 'Rijksmuseum | Extra'
    })
})

app.get('/datum', (req, res) => {
    res.render('datum', {
        title: 'Rijksmuseum | Datum'
    })
})

app.get('/test', (req, res) => {
    res.render('test', {
        title: 'Rijksmuseum | test'
    })
})

app.post('/datumkeuze', (req, res) => {
    res.render('extra', {
        title: 'Rijksmuseum | Extra',
        months: req.body.months.value
    })
})

 

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
