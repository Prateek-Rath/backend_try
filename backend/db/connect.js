const mongoose = require('mongoose')

const connectDB = (url) => {
  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
  try{
    return mongoose.connect(url, clientOptions);
    // return mongoose.connect(url, {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // })
  }
  catch(e){
    console.log('error in db connect', e)
  }
}

module.exports = connectDB