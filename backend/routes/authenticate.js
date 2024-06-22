var express = require('express');
var router = express.Router();
const path = require('path');

const {createUser, getAllUsers, getUser} = require('../controllers/user')



// router.use('/public', express.static(path.join(__dirname+'/public')));
// router.use(express.static('../backend/public'))

router.use(express.static(path.join(__dirname, 'public')));
router.use(express.json())
router.use(express.urlencoded({ extended: false }));


/* GET home page. */
router.route('/').get(function(req, res, next) {
  // res.render('index');
  res.send('home!!')
});

router.route('/login').get(function(req,res,next){
  try{
    console.log('we were hit at login!!');
    res.render('../public/login')
  }
  catch (e){
    console.log('error is', e);
  }
  
})

router.get('/register',function(req,res,next){
    console.log('we were hit at register!!')
    res.render('../public/register')
    
    
})

router.post('/login', function(req, res, next){
  console.log('post req at login');
  console.log(req.body);
  res.end();
})

router.post('/register', function(req, res, next){
  console.log('post req at register');
  console.log(req.body);
  createUser(req, res)
  res.end()
})

module.exports = router;
