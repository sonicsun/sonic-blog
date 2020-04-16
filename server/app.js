const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/error');
const appRouter = require('./routes');
const cors = require('cors');
const retoken = require('./middleware/retoken');
const app = express();

//解决跨域
app.use(cors());

//token验证
app.use(retoken);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ajax', appRouter);

app.use(errorHandler);

module.exports = app;
