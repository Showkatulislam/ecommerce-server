const express = require('express');
const { addUser, getUser } = require('./User.controls');

const userRoutes=express.Router()


userRoutes.route('/user')
.post(addUser)
.get(getUser)

module.exports=userRoutes
