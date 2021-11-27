const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager";
    }
    //     getHtml() {
    //         return `
    //         <div class="card" style="width: 18rem;">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${this.name}</h5>
    //         <p class="card-text">${this.id}</p>
    //         <p class="card-text">${this.email}</p>
    //         <p class="card-text">${this.officeNumber}</p>
    //     </div>
    // </div>
    //         `
    //     }
}

module.exports = Manager