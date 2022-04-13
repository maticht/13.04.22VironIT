const app = require('./app.js')
app.listen(6000)

// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'sign',
//     password: 'Byfly12345678.'
// })
//
// connection.query('select * from users',(err,res) => {
//     return console.log(res)
// });