type EmployeeType = {
  email: string;
  roles?: string[];
};

let data: { employees?: EmployeeType[] };

data = {
  employees: [
    { email: "test@example.com", roles: ["admin", "superAdmin"] },
    { email: "test2@example.com" },
    { email: "test3@example.com" },
  ],
};

const formattedEmployees = data?.employees?.map((employee: EmployeeType) => {
  const roles = employee.roles?.join(", ");
  return `${employee.email.toUpperCase()} ${roles}`;
});

console.log(formattedEmployees);
