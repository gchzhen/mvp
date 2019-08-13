const connection = require('./index.js');

const random = () => {
  return Math.ceil(Math.random() * 12);

}
const getImages = function() {
  const query = 'select * from images';
  return new Promise((resolve, reject) => {
    connection.query(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  getImages
}
