const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'rightstuff.cvojhsq84htk.us-east-2.rds.amazonaws.com',
  user: 'rightstuff',
  password: 'servicepony',
  database: 'rightbar',
});
