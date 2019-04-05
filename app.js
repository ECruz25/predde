const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const promisify = require("es6-promisify");
require("./handlers/passport");
const librosRouter = require("./routes/libros");
const categoriasRouter = require("./routes/categorias");
const indexRouter = require("./routes/index");
const passport = require("passport");
var cors = require("cors");
const app = express();

// view engine setup
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
//build mode
// app.get("/api", (req, res) => {
//   // res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

//production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

// app.use((req, res, next) => {
//   console.log("entre aca");
//   req.login = promisify(req.login, req);
//   next();
// });
app.use("/api", indexRouter);
app.use("/api/libros", librosRouter);
app.use("/api/categorias", categoriasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
