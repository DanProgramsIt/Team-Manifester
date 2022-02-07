const Employee = require("../lib/Employee");

test("Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("Name via constructor arguments", () => {
  const name = "Hulk";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("id via constructor arguments", () => {
  const testValues = 100;
  const e = new Employee("Foo", testValues);
  expect(e.id).toBe(testValues);
});
test("email via constructor arguments", () => {
  const testValues = "test@example.com";
  const e = new Employee("Foo", 1, testValues);
  expect(e.email).toBe(testValues);
});
test("gets name via GetName()", () => {
  const testValues = "Hulk";
  const e = new Employee(testValues);
  expect(e.getName()).toBe(testValues);
});
test("gets id via getId()", () => {
  const testValues = 100;
  const e = new Employee("Foo", testValues);
  expect(e.getId()).toBe(testValues);
});
test("gets email via getEmail()", () => {
  const testValues = "test@example.com";
  const e = new Employee("Foo", 1, testValues);
  expect(e.getEmail()).toBe(testValues);
});
test('getRole() should return "Employee"', () => {
  const testValues = "Employee";
  const e = new Employee("Hulk", 1, "test@example.com");
  expect(e.getRole()).toBe(testValues);
});
