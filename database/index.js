require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});


// module.exports = databaseConnection;

connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('SUCCESS - connected to db!');
  }
});

module.exports = connection;