class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "employee";
    }
};

module.exports = Employee;