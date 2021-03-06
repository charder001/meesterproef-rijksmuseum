module.exports = function (app) {
    var chrono = require('chrono-node');

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
            title: 'Rijksmuseum | Persoonsgegevens',
            nextPage: 'extra'
        })
    })
    app.get('/extra', (req, res) => {
        res.render('extra', {
            title: 'Rijksmuseum | Extras',
            nextPage: 'overzicht'
        })
    })
    app.get('/rembrandt', (req, res) => {
        res.render('rembrandt', {
            title: 'Rijksmuseum | Rembrandt',
            nextPage: '/'
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
            nextPage: 'tours',
        })
    })

    app.get('/ticketkeuze_rembrandt', (req, res) => {
        res.render('ticketkeuze_rembrandt', {
            title: 'Rijksmuseum | Tickets',
            nextPage: 'date_rembrandt',
        })
    })

    app.get('/date_rembrandt', (req, res) => {
        res.render('date_rembrandt', {
            title: 'Rijksmuseum | datum',
            selectedDay: "Vandaag",
            nextPage: 'gegevens',
        })
    })

    app.get('/extra', (req, res) => {
        res.render('extra', {
            title: 'Rijksmuseum | Extra'
        })
    })




    app.get('/overzicht', (req, res) => {
        res.render('overzicht', {
            title: 'Rijksmuseum | Overzicht bestelling',
            nextPage: 'home',
        })
    })

    app.get('/datum', (req, res) => {
        res.render('datum', {
            title: 'Rijksmuseum | test',
            selectedDay: "Vandaag",
            nextPage: 'gegevens',
        })
    })
    app.post('/datum', (req, res) => {

        //vertaling vandaag
        var vandaagParser = new chrono.Parser();
        // Provide search pattern
        vandaagParser.pattern = function () {
            return /vandaag/;
        };

        // This function will be called when matched pattern is found
        vandaagParser.extract = function (text, ref, match, opt) {

            // Return a parsed result, that is 25 December
            return new chrono.ParsedResult({
                ref: chrono.parseDate('today'),
                text: match[0],
                index: match.index,
            });
        };

        //vertaling morgen
        var morgenParser = new chrono.Parser();
        // Provide search pattern
        morgenParser.pattern = function () {
            return /morgen/;
        };

        // This function will be called when matched pattern is found
        morgenParser.extract = function (text, ref, match, opt) {

            // Return a parsed result, that is 25 December
            return new chrono.ParsedResult({
                ref: chrono.parseDate('tomorrow'),
                text: match[0],
                index: match.index,
            });
        };

        //vertaling volgende week
        var volgendeWeekParser = new chrono.Parser();
        // Provide search pattern
        volgendeWeekParser.pattern = function () {
            return /volgende week/;
        };

        // This function will be called when matched pattern is found
        volgendeWeekParser.extract = function (text, ref, match, opt) {

            // Return a parsed result, that is 25 December
            return new chrono.ParsedResult({
                ref: chrono.parseDate('next week'),
                text: match[0],
                index: match.index,
            });
        };

        //push custom parsers naar chrono
        var custom = new chrono.Chrono();
        custom.parsers.push(vandaagParser);
        custom.parsers.push(morgenParser);
        custom.parsers.push(volgendeWeekParser);


        var rawData = custom.parseDate(req.body.flexDateField)
        var stringData = String(rawData)
        var cleanData = stringData.split(" ")
        if (cleanData[1] == "Jun") {
            cleanData[1] = "Juni"
        } else if (cleanData[1] == "Jul") {
            cleanData[1] = "Juli"
        } else if (cleanData[1] == "Aug") {
            cleanData[1] = "Augustus"
        }
        if (cleanData[0] == "Mon") {
            cleanData[0] = "Maandag"
        } else if (cleanData[0] == "Tue") {
            cleanData[0] = "Dinsdag"
        } else if (cleanData[0] == "Wed") {
            cleanData[0] = "Woensdag"
        } else if (cleanData[0] == "Thu") {
            cleanData[0] = "Donderdag"
        } else if (cleanData[0] == "Fri") {
            cleanData[0] = "Vrijdag"
        } else if (cleanData[0] == "Sat") {
            cleanData[0] = "Zaterdag"
        } else if (cleanData[0] == "Sun") {
            cleanData[0] = "Zondag"
        }
        var sortedData = cleanData[0] + " " + cleanData[2] + " " + cleanData[1] + " " + cleanData[3]

        res.render('time', {
            title: 'Rijksmuseum | datum',
            nextPage: 'gegevens',
            months: req.body.flexDateField,
            selectedDay: sortedData
        })

    })

    app.post('/datumkeuze', (req, res) => {
        res.render('extra', {
            title: 'Rijksmuseum | Extra',
            months: req.body.months.value
        })
    })

    app.post('/selectedDate', (req, res) => {
        res.render('datum', {
            title: 'Rijksmuseum | datum'
        })
    })
}