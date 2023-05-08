const express = require('express')
const hbs = require('hbs')
const bodyparser = require('body-parser');
const { application } = require('express');
const puerto = process.env.PORT || 3000;
const cors = require('express')

const app = express();
//Vistas
app.set('view engine','hbs');
hbs.registerPartial(__dirname + '/views/partials',()=>{});
//Midleware
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(cors())

//Rutas

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('signin-one');
})

app.get('/categorias',(req,res)=>{
    res.render('simple')
})

app.get('*',(req,res)=>{
    res.render('404');
})
//Definir puerto en que escucha
app.listen(puerto,()=>{
    console.log('El servidor corriendo en el puerto', puerto);
})