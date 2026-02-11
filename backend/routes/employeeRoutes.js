const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');


router.post('/', async (req, res) => {
    try{
        const { employeeId, fullName, email, department } = req.body;
        if(!employeeId || !fullName || !email || !department) return res.status(400).json({message: 'All fields are required'});
        const existing = await Employee.findOne({$or: [{employeeId}, {fullName}] });
        if (existing) return res.status(409).json({message: 'Employee with this ID or email already exists'});
        const employee = new Employee({employeeId, fullName, email, department});
        await employee.save();
        res.status(201).json(employee);
    }
    catch(e){
        res.status(500).json({message: `Error while creating employee :- ${e}`});
    }
});


router.get('/', async (req, res) => {
    try{
        const employees = await Employee.find().sort({createdAt: -1});
        if (!employees) return res.status(404).json({message: 'Employees not found'});
        res.json(employees);
    }
    catch(e){
        res.status(500).json({message: `Error while fetching employees :- ${e}`});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) return res.status(404).json({message: 'Employee not found'});
        res.json(employee);
    }
    catch(e){
        res.status(500).json({message: `Error while deleting employee :- ${e}`});
    }
});


module.exports = router;