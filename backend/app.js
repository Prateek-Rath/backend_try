var createError = require('http-errors');
var express = require('express');
var path = require('path');
const process = require('process')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./db/connect');
require('dotenv').config()
const bodyParser = require('body-parser');



var authenticateRouter = require('./routes/authenticate');
var eventsRouter = require('./routes/events');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authenticateRouter);
app.use('/events', eventsRouter);

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




const port = 4000
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } 
  catch(e){
    console.log("error ", e);
  }
  finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}

run().catch(console.dir);














// start();
module.exports = app;
