const path = require("path");
const fs = require("fs");

// const templatesDir = path.resolve(__dirname, "../templates");
const generateHtml = employees => {
    const html = [];
    html.push(employees
        .filter(emp => emp.getRole() === "Manager")
        .map(mgr => (generateManagerHtml(mgr))));
    html.push(employees
        .filter(emp => emp.getRole() === "Engineer")
        .map(eng => (generateEngineerHtml(eng))));
    html.push(employees
        .filter(emp => emp.getRole() === "Intern")
        .map(int => (generateInternHtml(int))));

    return html.join("");
}

const generateManagerHtml = manager => {
    return `
 <div class="card" style="width: 18rem;">
    <div class="card-header bg-success">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">Role: Manager</p>
        <i class="far fa-mug-hot"></i>
    </div>
    <div class="card-body">
        <ul class="list-group">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email:<a href= "mailto:"${manager.getEmail()}>${manager.getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </div>
</div>

    
    `
}

const generateEngineerHtml = engineer => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-success">
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">Role: Engineer</p>
            <i class="far fa-mug-hot"></i>
        </div>
        <div class="card-body">
            <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href= "mailto:"${engineer.getEmail()}>${engineer.getEmail()}</a></li> 
        <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="_blank">Github Profile</a></li>
        </div>
    </div>
    
    `


}

const generateInternHtml = intern => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-success">
            <h5 class="card-title">${intern.getName()}</h5>
            <p class="card-text">Role: Intern</p>
            <i class="far fa-mug-hot"></i>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href= "mailto:"${intern.getEmail()}>${intern.getEmail()}</a></li> 
        <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
    </div>
    
    `


}

module.exports = employees => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>My Team</title>
</head>
<body>
<div class="jumbotron bg-primary">
  <h1 class="display-4 text-center">Team Details!</h1>
  <hr class="my-4">
</div>
<div class = "row">
<div class = "col-md-12 d-flex justify-content center">
${generateHtml(employees)}
</div>
</div>  
</body>
</html>

`
}




// module.exports = render;