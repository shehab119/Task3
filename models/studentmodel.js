var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  stdid: {
    type: Number,
    unique: true,
    require: true
  },
  stdname: {
    type: String,
    require: true
  },
  stddpt: {
    type: String,
    require: true
  },
  stdage: {
    type: Number,
    require: true
  },
  stdcn: {
    type: Number,
    unique: true,
    require: true
  }
    
});



module.exports = mongoose.model('student', batchSchema);
