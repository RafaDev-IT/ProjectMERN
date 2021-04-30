const express = require('express');
const router = express.Router();
const Taks = require('../models/taks')

router.get('/', (req, res)=>{

    Taks.find((err,taks)=> {
        console.log('data traida',taks)
    })

    res.json({
        status: "API Works!"
    });
})

module.exports = router;