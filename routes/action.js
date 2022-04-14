const express = require('express')
const controller = require('../controllers/action')
const router = express.Router()

router.get('/', controller.getAllUsers)
    .get('/:id', controller.getUsersById)
    .delete('/:id', controller.deleteUsersById)
    .post('/', controller.addUser)
    .put('/:id', controller.overwriteUsersById)

module.exports = router