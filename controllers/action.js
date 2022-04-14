const Sequelize = require("sequelize");
const sequelize = new Sequelize("sign", "root", "Byfly12345678.", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});
const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
// export const Sequelize = require("sequelize");
// import {sequelize} from '../services/swquelize'

// import ('../services/swquelize').then(module => {
    let body
    module.exports.getAllUsers = (req,res) => {
        User.findAll({raw:true}).then(users => {
            res.end(JSON.stringify(users.flat()))
        })
    }

    module.exports.getUsersById = (req,res) => {
        User.findOne({where: {id: req.params.id}}).then(user => {
            console.log(`{ id: ${user.id}, userName: '${user.userName}', age: ${user.age} }`)
            res.end(JSON.stringify({ id: user.id, userName: user.userName, age: user.age }))
        })
    }

    module.exports.deleteUsersById = (req,res) => {
        User.destroy({ where: {id: req.params.id}})
        res.end(`User with id ${req.params.id} has been deleted`)
    }

    module.exports.addUser = (req,res) => {
        body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            User.create(JSON.parse(body))
            res.end('User has been added')
        });
    }

    module.exports.overwriteUsersById = (req,res) => {
        body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            User.update(JSON.parse(body),{where: {id: req.params.id}})
            res.end('Users has been overwritten')
        });
    }
// })



