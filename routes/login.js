const path = require('path'); 

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'views','login.html'));
});

router.post('/', (req,res,next)=> {
    const { uname } = req.body;
    res.redirect(`/chat?uname=${encodeURIComponent(uname)}`);
})

module.exports = router;