const express = require('express');
const { addText, getText, upDateText } = require('./textControlls');

const textRoute=express.Router()

textRoute.route('/text')
.post(addText)
.get(getText)
.put(upDateText)


module.exports=textRoute