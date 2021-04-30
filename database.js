require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.PASSMONGO, {useNewUrlParser: true,})
.then(db=>console.log("Base conectada"))
.catch(err => console.erro(err));

module.exports = mongoose;