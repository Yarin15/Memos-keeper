const mongoose = require('mongoose');

const MemoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    default: 'Hurry'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('memo', MemoSchema);
