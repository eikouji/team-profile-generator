const Engineer = require("../lib/Engineer");

test("puts Github account as a constructor", () => {
    const GitHubUser = "GithubUser";
    const employee = new Engineer("")
    expect(employee.github).toBe(testValue);

}

test("getRole() should return ${"Engineer"}, () => {
    const testValue = "Engineer";
    const employee = new Engineer("John", 1, "email@test.com", "GithubUser");
    expect(employee.getRole()).to.equal(testValue);
});

test("Can get GitHub username from gitHub()", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("John", 1, "email@test.com", testValue)
  expect(employee.getGithub()).toBe(testValue);
});