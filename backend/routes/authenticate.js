var express = require('express');
var router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const connect = require('../db/connect')

const url = ''
connect(url);

router.use(express.json())
router.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login',function(req,res,next){
  res.render('login');
})

router.post('/login', function(req, res, next){
  ;
})

router.post('/register', function(req, res, next){
  ;
})

module.exports = router;
