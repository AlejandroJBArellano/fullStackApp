const index = {}, Employee = require("../models/employee");
index.index = (req, res) => {
    res.json({ mother: "topo"})
}
index.getEmployee = async (req, res) => {
    const { name } = req.params
    const employee = await Employee.findOne({name: name})
    res.json(employee)
}
index.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
index.createEmployee = async (req, res) => {
    let {name, office, position, salary} = req.body
    name = name.trim()
    office = office.trim()
    position = position.trim()
    salary = salary.trim()
    if(salary.includes(",")){
        salary = salary.replace(",", "")
    }
    salary = parseInt(salary)
    const newEmployee = new Employee({
        name,
        office,
        position,
        salary
    });
    await newEmployee.validate()
    await newEmployee.save();
    res.json({message: "employee created"})
}
index.updateEmployee = async (req, res) => {
    const {id} = req.params
    let {name, office, position, salary} = req.body
    name = name.trim()
    office = office.trim()
    position = position.trim()
    salary = salary.trim()
    if(salary.includes(",")){
        salary = salary.replace(",", "")
    }
    salary = parseInt(salary)
    await Employee.updateOne({_id: id}, {
        name, office, position, salary
    })
    res.json({message: "employee updated"})
}
index.deleteEmployee = async (req, res) => {
    const {id} = req.params
    await Employee.findByIdAndDelete(id)
    res.json({message: "employee deleted"})
}
module.exports = index