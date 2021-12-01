const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

const morgan = require('morgan')
app.use(morgan('combined'))
    //Template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})