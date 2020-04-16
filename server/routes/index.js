const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const articleRouter = require('./article');

router.use('/login', loginRouter);
router.use('/article', articleRouter);

module.exports = router;
