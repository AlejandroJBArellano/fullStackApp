// los datos opcionales son los qe vieen del backend y se pueden representar con una "?"
// export interface Employee {
//     name: String;
//     position: String;
//     office: String;
//     salary: Number;
//     _id?: String;
//     createdAt?: String;
//     updatedAt?: String;
// }
export class Employee {
    constructor(
        _id = "", 
        name = "",
        office = "",
        position = "",
        salary = 0
    ) {
        this._id = _id;
        this.name = name;
        this.office = office;
        this.position = position;
        this.salary = salary;
    }
    _id: string;
    name: string;
    office: string;
    position: string;
    salary: number;
}