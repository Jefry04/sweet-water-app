const { Router } = require('express');
const FormController = require('../controllers/form.controller');

const router = Router();

/*
    Get All Forms
    GET api/forms
*/
router.get('/', FormController.getAllForms);

/*
    Save Form
    POST api/forms
*/
router.post('/', FormController.createForm);

/*
    Get Forms By Role
    GET api/forms/roles?q=role1,role2,role3...
*/
router.get('/roles', FormController.getFormByRole);

/*
    Get Forms By ID
    GET api/forms/:id
*/
router.get('/id/:id', FormController.getFormById);

module.exports = router;
