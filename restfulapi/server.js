const express=require('express')
const mongoose= require('mongoose')
path=require('path')
boyParser=require('body-parser')
cors=require('cors')

var mongoDatabase='mongodb://0.0.0.0:27017/employeeDB'

const app=express()  //created express server
mongoose.Promise=global.Promise

//mongodb connection
mongoose.connect(mongoDatabase).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Cannot connect'+err)}
);

//all express routes imported here
const employeeRoutes=require('./Routes/Employee.route');
const bodyParser = require('body-parser')

//convert all data into json format
app.use(bodyParser.json());
app.use(cors());

//Route configuration
app.use('/employees',employeeRoutes);

//start server at port 4000
const server=app.listen(4000,function(){
    console.log('Server is listening to port 4000')
})
