const {dataSource} = require('./database');
const cors = require('cors');
require('dotenv').config();
const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./routes/routes');
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());
app.use('/',router);
app.use(cors())
async function run()
{
    try{
    await dataSource.initialize();
    console.log('datasource initialized');
    app.listen(process.env.port,()=>{
        console.log(`server listening on port ${process.env.port}`);
    
    })
}
catch(error){
    console.log(error.message);
}
}
run();
