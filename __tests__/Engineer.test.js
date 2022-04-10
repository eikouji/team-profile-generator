const Engineer = require("../lib/Engineer");

// test Engineer's name is Angela, email: test@email.com, github username: a-code0101 //

test("puts Github account as a constructor", () => {
    const gitHubUser = "GithubUser";
    const employee = new Engineer("Angela", 1, "test@email.com", gitHubUser);
    expect(employee.github).toBe(testValue);

});

test("can get GitHub username from getGithub()", () => {
    const username = "GitHubUser";
    const employee = new Engineer("Angela", 1, "test@gmail.com", "a-code0101");

    expect(employee.getGithub()).toBe(username);
});

test("getRole() should return \"Engineer\"", () => {
    const engineer = "Engineer",
    const employee = new Engineer("Angela", 1, "test@gmail.com", "GitHubUser");
    expect(employee.getRole()).toBe(engineer);
});