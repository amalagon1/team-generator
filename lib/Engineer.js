const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
    //     getHtml() {
    //         return `
    //         <div class="card" style="width: 18rem;">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${this.name}</h5>
    //         <p class="card-text">${this.id}</p>
    //         <p class="card-text">${this.email}</p>
    //         <p class="card-text">${this.github}</p>
    //     </div>
    // </div>
    //         `
    //     }
}

module.exports = Engineer