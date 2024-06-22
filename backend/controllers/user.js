const User = require('../models/user');

const getAllUsers = async (req, res) => {
  const users = await User.find({})
    .sort('username')
  res.status(200).json({ users, nbHits: products.length });
};

const getUser = async (req, res) => {
  const { username} = req.query;
  const queryObject = {};

  if(username){
    queryObject = {
        username: `${username}}`,
    }
  }
  res.status(200).json({ products, nbHits: products.length });
};

const createUser = async (req, res) =>{
    try{
        await User.create(new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }));
        console.log('user created successfully');
    }
    catch(e){
        console.log(e);
        res.send({error: e})
    }
}
module.exports = {
  getAllUsers,
  getUser,
  createUser,
};