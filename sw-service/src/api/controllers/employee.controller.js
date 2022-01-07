const EmployeeService = require('../service/employee.service');

const registerEmployee = async (req, res) => {
  const { fullName, nationalId, workRole } = req.body;
  const existingEmployee = await EmployeeService.getEmployeeByNationalId(nationalId);

  if (existingEmployee !== null) {
    return res.status(400).json({
      success: false,
      errMsg: 'USER_ALREADY_CREATED',
    });
  }

  const savedEmployee = await EmployeeService.saveEmployee({ fullName, nationalId, workRole });

  // Verificar que no vengan vacios
  return res.status(201).json({
    success: true,
    employee: {
      fullName: savedEmployee.fullName,
      nationalId: savedEmployee.nationalId,
      workRole: savedEmployee.workRole,
    },
  });
};

module.exports = {
  registerEmployee,
};
