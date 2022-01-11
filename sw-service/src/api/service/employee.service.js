const { Employee } = require('../models');

const getEmployeeByNationalId = async (nationalId) => {
  try {
    return await Employee.findOne({ nationalId });
  } catch (e) {
    throw Error('Error while looking for Employee');
  }
};

const saveEmployee = async (employee) => {
  const newEmployee = new Employee(employee);

  try {
    return await newEmployee.save();
  } catch (e) {
    throw Error('Error while saving Employee');
  }
};

module.exports = {
  getEmployeeByNationalId,
  saveEmployee,
};
