const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next) => {
    const { uname } = req.query;
    res.render(path.join(rootDir, 'views', 'chat.html'), { uname });
});

module.exports = router;