//Variables de entorno
require('dotenv').config();

const express = require('express')
const hbs = require('hbs');
const app = express()
// Traemos la variable de entorno
const port = process.env.PORT;

// handlebars: renderizar vistas
// esto es para proyectos sencillos
// se necesita crear una carpeta llamada views

app.set('view engine', 'hbs');
// Parciales de handlebars
hbs.registerPartials(__dirname + '/views/partials');

// renderizamos el index/home
app.get('/',  (req, res) => {
  
  res.render('home', {
    // aqui se ponen las opciones
    nombre: 'Diego Aaron',
    titulo: 'Curso de Node'
    // esto se usa en home.hbs
  });
});

// renderizamos generic
app.get('/generic',  (req, res) => { 
  res.render('generic', {
    // aqui se ponen las opciones
    nombre: 'Diego Aaron',
    titulo: 'Curso de Node'
    // esto se usa en home.hbs
  });
});

// renderizamos elements
app.get('/elements',  (req, res) => { 
  res.render('elements', {
    // aqui se ponen las opciones
    nombre: 'Diego Aaron',
    titulo: 'Curso de Node'
    // esto se usa en home.hbs
  });
});

// Servir contenido estatico
// Middleware
app.use(express.static('public', {extensions: ['html', 'htm']}));

app.get('/hola-mundo',  (req, res) => {
  res.send('Hello World en su respectiva ruta')
})

// Comodin
app.get('*',  (req, res) => {
//   res.send('404 | Page not found')
// Hay que crear una ruta absoluta, se usa __dirname
  res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })