const express = require("express");
const { Student } = require("../models/Student");
const router = express.Router();

const studentList = async (req, res) => {
    const studentList = await Student.find().sort({name: 1});
    res.send(studentList);
}

const newStudent = async (req, res) => {
    const student = new Student(req.body);
    try {
        const result = await student.save();
        res.send(result);
    } catch (error) {
        const errMsg = [];
        for(field in error.errors){
            errMsg.push(error.errors[field].message)
        }
        return res.status(400).send(errMsg);
    }

}

const studentDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if(!student) res.status(404).send("ID not found!");
        res.send(student);
    } catch (error) {
        res.status(404).send("ID not found!");
    }
}

const studentUpdate = (req, res) => {
    const id = req.params.id;
    const student = req.body;
}

const studentDelete = (req, res) => {

}

router.route('/')
    .get(studentList)
    .post(newStudent)

router.route('/:id')
    .get(studentDetails)
    .put(studentUpdate)
    .delete(studentDelete)

module.exports = router;