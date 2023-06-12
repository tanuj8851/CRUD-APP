const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 1800, // Data expires after 30 minutes
  },
});

module.exports = mongoose.model('Weather', weatherSchema);
