var _a;
var data;
data = {
    employees: [
        { email: "test@example.com", roles: ["admin", "superAdmin"] },
        { email: "test2@example.com" },
        { email: "test3@example.com" },
    ],
};
var formattedEmployees = (_a = data === null || data === void 0 ? void 0 : data.employees) === null || _a === void 0 ? void 0 : _a.map(function (employee) {
    var _a;
    var roles = (_a = employee.roles) === null || _a === void 0 ? void 0 : _a.join(", ");
    return "".concat(employee.email.toUpperCase(), " ").concat(roles);
});
console.log(formattedEmployees);
//# sourceMappingURL=034_optional_chaining.js.map