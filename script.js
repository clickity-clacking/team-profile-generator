const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// create the about section
const generateCards = employee => {
    console.log("generateCards called");
    var type = ""
    var roleInfo = ``;
    var cardString = [];

    if( employee instanceof Manager === true){    
        var icon = "fa-solid fa-mug";
        type = "manager";
        console.log("it's an manager");
        roleInfo = `
        <p>Office Number: ${employee.officeNum}</p>
        `
    } else if( employee instanceof Engineer === true){    
        var icon = "fa-solid fa-glasses";
        type = "engineer";
        console.log("it's an engineer");
        roleInfo = `
            <a href="employee.gitHub">GitHub</a>
        `
    } else {    
        var icon = "fa-solid fa-graduation-cap";
        type = "intern";
        console.log("it's an intern");
        roleInfo = `
            <p>School: ${employee.school}</p> 
        `
    };

    cardString = `<li class="employee-card">
        <div class = "card">
            <img class="card-img-top" src=${icon} alt="Card image">
            <div class="card-body">
                <h5 class="card-title">${employee.name}</h5>
                <p>${type}<p>
                <p>ID: ${employee.id}</p>
                <p>Email: ${employee.email}</p>
                ${roleInfo}
            </div>
        </div>    
    </li>`;

    return cardString;
};


//manipulate into html-insertable format
const intoArray = roster => {
    console.log("intoArray called");
    htmlArray=[];

    for(let i = 0; i<roster.length; i++){
        htmlArray.push(generateCards(roster[i]));
    };

    console.log(htmlArray);
    var stringArray = htmlArray.toString();
    return (stringArray.replace(",", ' '))
};


// create the projects section
const generateHTML = teamRoster => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section class = "flex-container">
            <div class="card-group"> 
                ${intoArray(teamRoster)}
            </div>
        </section>
    
    </body>
    </html>
    `
};

// export function to generate entire page
module.exports = generateHTML;
