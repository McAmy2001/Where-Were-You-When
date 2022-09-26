const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/where-were-you-when', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useCreateIndex: true,
  //useFindAndModify: false
});

module.exports = mongoose.connection;