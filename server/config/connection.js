const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/where-were-you-when', {
  
});

module.exports = mongoose.connection;