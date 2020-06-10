module.exports = function (app) {

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
}