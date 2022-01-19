const { Router } = require('express');
const EmployeeController = require('../controllers/employee.controller');

const router = Router();

/*
   Save new employee
   POST api/employee
*/
router.post('/', EmployeeController.registerEmployee);

module.exports = router;
