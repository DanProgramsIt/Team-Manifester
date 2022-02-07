const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("set office number via constructor arguments", () => {
    const testValues = 100;
    const e = new Manager("Foo", 1, "test@example.com", testValues);
    expect(e.getOfficeNumber()).toBe(testValues);
});
test("getRole() should return \"Manager\"", () => {
    const testValues = "Manager";
    const e = new Manager("Foo", 1 , "test@example.com", 100);
    expect(e.getRole()).toBe(testValues);
});
test("get office number via getOffice()", () => {
    const testValues = 100;
    const e = new Manager("Foo", 1 , "test@example.", testValues);
    expect(e.getOfficeNumber()).toBe(testValues);
});