var express = require('express');
var router = express.Router();
const path = require('path')


router.use('/public', express.static(path.join(__dirname+'/public')));

// router.use(express.static(path.join(__dirname, 'public')));
router.use(express.json())
router.use(express.urlencoded({ extended: false }));


/* GET home page. */
router.route('/').get(function(req, res, next) {
  // res.render('index');
  res.send('home!!')
});

router.route('/login').get(function(req,res,next){
  try{
    console.log('we were hit!!');
    res.render('../public/login');
    next()
  }
  catch (e){
    console.log('error is', e);
  }
  
})

router.get('/register',function(req,res,next){
    console.log('we were hit!!')
    res.render('../public/register');
    next()
})

router.post('/login', function(req, res, next){
  ;
})

router.post('/register', function(req, res, next){
  ;
})

module.exports = router;
