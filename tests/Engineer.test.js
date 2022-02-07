const Engineer = require("../lib/Engineer");

test("GitHub account via constructor", () => {
  const testValues = "githubUser";
  const e = new Engineer("Foo", 1, "test@example.com", testValues);
  expect(e.github).toBe(testValues);
});
test('getRole() sgould return "Engineer"', () => {
  const testValues = "Engineer";
  const e = new Engineer("Foo", 1, "test@example.com", "githubUser");
  expect(e.getRole()).toBe(testValues);
});
test("GitHub username via getGithub()", () => {
  const testValues = "githubUser";
  const e = new Engineer("Foo", 1, "test@example.com", testValues);
  expect(e.getGithub()).toBe(testValues);
});
