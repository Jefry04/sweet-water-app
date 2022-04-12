// Base path: api/form/response
const { Router } = require('express');
const FormResponseController = require('../controllers/formResponse.controller');

const router = Router();

/*
    Save Form Response
    POST api/forms/response
*/
router.post('/', FormResponseController.saveFormResponse);

/*
    Get all form responses -> Filters needed -> Pagination included
    By default, brings the last 20 responses if no filter included.

    GET api/forms/response?from=12312313&to=42423414&user=rvasquez
*/
router.get('/', FormResponseController.getFormResponse);

/*
    Get response by id
    GET api/forms/response/:id
*/
router.get('/:id', FormResponseController.getFormResponseById);

module.exports = router;
