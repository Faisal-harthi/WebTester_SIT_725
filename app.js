var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var websiteRouter = require('./routes/websiteRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
///'mongodb://localhost:27017/websiteDatabase'
app.listen(process.env.PORT, async () => {
  try {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect( "mongodb+srv://Faisal:1988@cluster0.tn3yg.mongodb.net/websiteDatabase?retryWrites=true&w=majority", { useNewUrlParser: true },{useFindAndModify:false});
    return console.log(`Server started on port`);
  } catch (error) {
    return console.error(error);
  }
});
app.use('/website', websiteRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
