const express = require('express')
const app = express()
const port = 8080;

var hbs = require( 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//TODO: require(hbs)
app.set('view engine','hbs');

//Servir contenido estatico
app.use( express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Juan Vera',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function(req, res){
    res.render('generic',{
        nombre: 'Juan Vera',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function(req, res){
    res.render('elements',{
        nombre: 'Juan Vera',
        titulo: 'Curso de Node'
    });
})

// app.get('/home', function(req, res){
//     res.sendFile(__dirname + '/public/index.html')
// })

app.get('*', function(req, res){
    res.send('404 Page not found')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})