const db = require('../config/db');

const schema = db.Schema({
  goodName: String,
})

module.exports = db.model('good', schema);
