const { Router } = require('express');
const FormController = require('../controllers/form.controller');
const FormResponseRoute = require('./formResponse.route');

const router = Router();

// =========== Form Route ===============

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

// =========== Form Response Route ===============

router.use('/response', FormResponseRoute);

module.exports = router;
