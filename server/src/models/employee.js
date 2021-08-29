const { Schema, model } = require("mongoose");

const repetitive = {
    type: String,
    required: true
}

const EmployeeSchema = new Schema({
    name: repetitive,
    position: repetitive,
    office: repetitive,
    salary: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Employee", EmployeeSchema)