const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const librosRouter = require('./routes/libros');
const categoriasRouter = require('./routes/categorias');
const userRouter = require('./routes/users');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
require('./config-passport/passsport-setup')

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'predeEditorial',
  resave:false,
  saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//Login Messages 
app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  console.log(app.locals)
  next();
});

//build mode
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  // //
  // app.get('*', (req, res) => {
  //   res.sendfile(path.join((__dirname = 'client/build/index.html')));
  // });
}

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/libros', librosRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/user',userRouter);

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
