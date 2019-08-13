const connection = require('./index.js');

const random = () => {
  return Math.ceil(Math.random() * 12);

}
const getImages = function() {
  // const = random();
  const params = [random(), random()];
  const query = 'select * from images where id = (?) or id = (?)';
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, data) => {
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
