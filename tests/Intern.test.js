const Intern = require("../lib/Intern");

test("set school via constructor",() => {
    const testValues = "Uconn";
    const e = new Intern("Foo", 1, "test@example.com", testValues);
    expect(e.school).toBe(testValues);
});
test("getRole() should return \"Intern\"",() => {
    const testValues = "Intern";
    const e = new Intern("Foo", 1, "test@example.com", "Uconn");
    expect(e.getRole()).toBe(testValues);
});
test("get school via getSchool()",() => {
    const testValues = "Uconn";
    const e = new Intern("Foo", 1, "test@example.com", testValues);
    expect(e.getSchool()).toBe(testValues);
});