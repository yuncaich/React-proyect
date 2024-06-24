const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'srv1468.hstgr.io',
    user: 'u116342077_admin',
    password: 'Yun.1001',
    database: 'u116342077_MundolandiaP'
});

module.exports = pool.promise();
