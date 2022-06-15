const employee = {
    name: "Daniel",
    streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee};

    newObj[key] = "11 Broadway";

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee 
} 

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee
}