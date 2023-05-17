const mongoose = require('mongoose');
const app = require('./app/app');
require('dotenv').config()
mongoose.connect(process.env.DATABASELOCAL)
.then(res=>{
    console.log("DATABASE CONNECTED");
})
app.listen(5000,()=>{
    console.log('SERVER IS RUNNING AT PORT 5000');
})