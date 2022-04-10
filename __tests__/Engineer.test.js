const Engineer = require("../lib/Engineer");

test("puts Github account as a constructor", () => {
    const gitHubUser = "GithubUser";
    const employee = new Engineer("angela", 1, "email@test.com", gitHubUser);
    expect(employee.github).toBe(testValue);

});

test("can get GitHub username from getGithub()", () => {
    const username = "GitHubUser";
    const employee = new Engineer("angela", 1, "email@test.com", username);

    expect.(employee.getGithub()).toBe(username);
})l;

test("getRole() should return \"Engineer\"", () => {
    const engineer = "Engineer",
    const employee = new Engineer("angela", 1, "email@test.com", "GitHubUser");
    expect.(employee.getRole()).toBe(engineer);
});