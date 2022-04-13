// let userArr = [{"id": 1, "userName": 'Alex', "age": 50},
//     {"id": 2, "userName": 'Max', "age": 40},
//     {"id": 3, "userName": 'Egor', "age": 45},
//     {"id": 4, "userName": 'Misha', "age": 20}]
// [{"id":5,"userName":"Dima","age":50},{"id":6,"userName":"Valera","age":30},{"id":7,"userName":"Pit","age":40}]

let body
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sign',
    password: 'Byfly12345678.'
})
connection.connect()

module.exports.getAllUsers = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        res.end(JSON.stringify(result.flat()))
    });
}

module.exports.getUsersById = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        res.end(JSON.stringify(result.flat()[req.params.id - 1]))
    });
}

module.exports.deleteUsersById = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        delete result[req.params.id - 1];
        res.end(`User with id ${req.params.id} has been deleted`)
        console.log(result.flat())
    });
}

module.exports.addUser = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            result.push(JSON.parse(body))
            res.end('User has been added')
            console.log(result.flat())
        });
    });
}

module.exports.overwriteAllUsers = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            result.splice(0,result.length,JSON.parse(body))
            res.end('Array with users has been overwritten')
            console.log(result.flat())
        });
    });
}

module.exports.overwriteUsersById = (req,res) => {
    connection.query('select * from users',(err,result)=> {
        body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            result.splice(req.params.id - 1,1,JSON.parse(body))
            res.end('Users has been overwritten')
        });
    });
}

