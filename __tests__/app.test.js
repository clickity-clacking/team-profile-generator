const init = require("../app");

// test if init generatesteam.html with 
test("init is saving user input form [questions] in [answers]", () => {
    questions = [ {
        type: 'list',
        name: 'role',
        message: "What is the employee's role on the team?",
        choices: ["Manager", "Engineer", "Intern"]
    }]

    init(questions);
    expect(answers[0]).toBe("Manager" || "Engineer" ||"Intern");
});
