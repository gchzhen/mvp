const connection = require('./index.js');

const getAllImages = function(callback) {
  var q = 'select * from categories';
  connection.query(q, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = getImages;
