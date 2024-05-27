const express=require('express')
const app=express()  //created express server
const employeeRoute=express.Router();
let employeeModel=require('../Model/Employee')

//add employee data into the database
employeeRoute.route('/addEmployee').post(function(req,res){
    let employee=new employeeModel(req.body);
    employee.save()
    .then(game=>{
        res.status(200).json({'employee':'Employee Added Successfully'});
    })
    .catch(err=>{
        res.status(400).send("Something went wrong")
    });
    });

    //to get the list of employeees
employeeRoute.route('/').get(function(req,res){
    employeeModel.find()
    .then((employees)=>{
console.log(employees);
res.json(employees);
    }).
    catch((err)=>{
        console.log(err);
        res.status(500).json({error:"An error occured fetching data."});
    })

});

    //get employee details by employeeID
    employeeRoute.route('/editEmployee/:id').get(function(req,res){
        let id=req.params.id;
        employeeModel.findById(id)
        .then((employees)=>{
            console.log(employees);
            res.json(employees);
                }).
                catch((err)=>{
                    console.log(err);
                    res.status(500).json({error:"An error occured fetching data."});
                })
    });

    //update the employee details
    employeeRoute.put('/updateEmployee/:id',(req,res)=>{

        const id=req.params.id;
        employeeModel.findByIdAndUpdate({_id:id},{firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,
        })
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    });

    //delete employee from database
    employeeRoute.delete('/deleteEmployee/:id',(req,res)=>{
employeeModel.findByIdAndDelete({_id:req.params.id})
.then((employees)=>{
    console.log("Data Deleted");
    res.json(employees);
        }).
        catch((err)=>{
            console.log(err);
            res.status(500).json({error:"An error occured deleting data."});
        })
});

module.exports=employeeRoute

