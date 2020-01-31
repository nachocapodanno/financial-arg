var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
//const urlDev = 'mongodb://localhost:27017/financial';
//const url = 'mongodb+srv://financial:DW6v1v7y6oE4s2IJ@cluster0-qrdsa.mongodb.net/financial?retryWrites=true&w=majority';
const url = process.env.MONGOLAB_URI;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
if (err) {
  console.log('Unable to connect to the mongoDB server. Error:', err);
} else {
  console.log('Connection established to', url);
}
});//==========================//

module.exports = app;
