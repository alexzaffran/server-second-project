const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersDB')
.then(res=>{ console.log('db connected') })
.catch(e=>console.log(e));
