require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.PASSMONGO, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db=>console.log("Base conectada"))
.catch(err => console.error(err));

module.exports = mongoose;