const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express()
const port = 3000
const route = require('./routers')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const morgan = require('morgan')
    //logger
    //app.use(morgan('combined'))
    //Template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//Route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})