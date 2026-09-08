let employees = [];

const nameInput = document.getElementById("nameInput");
const departmentInput = document.getElementById("departmentInput");
const experienceInput = document.getElementById("experienceInput");
const salaryInput = document.getElementById("salaryInput");
const addEmployeeButton = document.getElementById("addEmployeeButton");
const employeeContainer = document.getElementById("employeeContainer");

addEmployeeButton.addEventListener("click", () => {
    const name = nameInput.value;
    const department = departmentInput.value;
    const experience = Number(experienceInput.value);
    const salary = Number(salaryInput.value);
    if (name === "" || department === "" || experience === 0 || salary === 0) {
        alert("Please fill all fields");
        return;
    }
    const employee = {
        id: employees.length + 1,
        name: name,
        department: department,
        experience: experience,
        salary: salary
    };

    employees.push(employee);

    displayEmployees();

    nameInput.value = "";
    departmentInput.value = "";
    experienceInput.value = "";
    salaryInput.value = "";
});

const displayEmployees = () => {

    employeeContainer.innerHTML = "";

    employees.forEach(employee => {

        const employeeCard =
            document.createElement("div");

        employeeCard.classList.add(
            "employee-card"
        );

        employeeCard.innerHTML = `
        <h3>👤 ${employee.name}</h3>
        <p>
            <strong>ID: </strong>${employee.id}
        </p>
        <p>
            <strong>Department: </strong>${employee.department}
        </p>
        <p>
            <strong>Experience: </strong>${employee.experience} years
        </p>
        <p>
            <strong>Salary: </strong>₹${employee.salary}
        </p>
        <button
            class="remove-button"
            onclick="removeEmployee(${employee.id})">
            Remove Employee
        </button>
    `;
        employeeContainer.appendChild(
            employeeCard
        );
    });
};

const removeEmployee = (id) => {
    employees = employees.filter(
        employee => employee.id !== id
    );
    displayEmployees();
};