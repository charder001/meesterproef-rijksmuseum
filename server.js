const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
var chrono = require('chrono-node');
=======
const moment = require('moment');
>>>>>>> dc856df1e393d0442d52534515034050add9a6a6
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
        title: 'Rijksmuseum | Tours'
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

app.get('/testdate', (req, res) => {
    res.render('testdate', {
        title: 'Rijksmuseum | test',
    })
})

let value = '';
app.post('/testdate2', (req, res) => {
    dateValue(req.body.momentdate)
    let invoer = 'Gekozen datum is: ' + value;
    res.render('testdate2', {
        title: 'Rijksmuseum | testresultaat',
        chosen: invoer,
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

// var pickedDate = chrono.parseDate('morgen')
// console.log(pickedDate)
function dateValue(date){
    if (date == "morgen"){
        console.log( 'de dag is morgen')
        value = moment().add(1, 'days').calendar();
    }
    else  if (date == "overmorgen"){
        console.log( 'de dag is overmorgen')
        value = moment().add(2, 'days').calendar();
    }
}


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
