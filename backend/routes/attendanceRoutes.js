const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");


router.post('/', async (req, res) => {
    try {
        const { employeeId, date, status } = req.body;
        if (!employeeId || !date || !status) return res.status(400).json({ message: 'All fields are required' });
        const employee = await Employee.findById(employeeId);
        if (!employee) return res.status(404).json({ message: 'Employees not found' });
        const attendance = new Attendance({employee: employeeId, date, status});
        await attendance.save();
        res.status(201).json(attendance);
    }
    catch(e){
        res.status(500).json({message: `Error while creating employee attendance :- ${e}`});
    }
});


router.get('/:id', async (req, res) => {
    try{
        const attendance = await Attendance.find({employee: req.params.id}).sort({date: -1});
        res.json(attendance);
    }
    catch(e){
        res.status(500).json({message: `Error while fetching employee attendance :- ${e}`});
    }
});


module.exports = router;