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

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rijksmuseum'
    })
})

app.get('/tours', (req, res) => {
    res.render('tours', {
        title: 'Rijksmuseum | Tours',
        nextPage: 'datum',
    })
})

app.get('/gegevens', (req, res) => {
    res.render('gegevens', {
        title: 'Rijksmuseum | Persoonsgegevens'
    })
})


app.get('/tickets', (req, res) => {
    res.render('ticket', {
        title: 'Rijksmuseum | Tickets'
    })
})

app.get('/datum2', (req, res) => {
    res.render('datum2', {
        title: 'Rijksmuseum | Tickets'
    })
})


app.get('/ticketkeuze', (req, res) => {
    res.render('ticketkeuze', {
        title: 'Rijksmuseum | Tickets',
        nextPage: 'tours',
    })
})
                        
app.get('/extra', (req, res) => {
    res.render('extra', {
        title: 'Rijksmuseum | Extra'
    })
})

app.get('/datum', (req, res) => {
    res.render('datum', {
        title: 'Rijksmuseum | Datum',
        nextPage: 'gegevens',
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

app.post('/selectedDate', (req, res) => {
    res.render('test', {
        title: 'Rijksmuseum | test'
    }) 
    
})


//chrono

var morgenParser = new chrono.Parser();

// Provide search pattern
morgenParser.pattern = function () { return /morgen/; };

// This function will be called when matched pattern is found
morgenParser.extract = function(text, ref, match, opt) { 
    
    // Return a parsed result, that is 25 December
    return new chrono.ParsedResult({
        ref: chrono.parseDate('tomorrow'),
        text: match[0],
        index: match.index,
    });
};



var custom = new chrono.Chrono();
custom.parsers.push(morgenParser);

console.log(custom.parseDate("morgen"))


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
