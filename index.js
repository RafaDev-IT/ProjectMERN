
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database.js');

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware

app.use(morgan('dev'));
app.use(express.json());

//Router
app.use('/api/taks',require('./src/routes/task.routes'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname));
})

//Static Files
app.use(express.static(path.join(__dirname,"/src/public/")))

//Starting server
app.listen(app.get('port'),()=>{
console.log(`Escuchando el puerto ${app.get('port')}`)
})  