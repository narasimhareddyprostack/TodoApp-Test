const express = require('express');
const app = express();
const router = require('./routes/routes');
require('./model/db');
const cors = require('cors');

app.use(cors({origin:'*'}))
app.use(express.json())
app.use('/api/todos',router);
app.listen('8000',(err,res)=>{
    if(err) throw err;
    console.log('Server is running on port no 8000')
})