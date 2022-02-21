const FormService = require('../service/form.service');
const { SERVICE_ERRORS, ROLES } = require('../../lib/constants');

const getAllForms = async (req, res) => {
  try {
    const allForms = await FormService.getForms();

    if (allForms === null) {
      return res.status(404).json({
        success: false,
        errMsg: SERVICE_ERRORS.RESOURCE_NOT_FOUND,
      });
    }

    return res.json({
      success: true,
      forms: allForms,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

const getFormByRole = async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(404).json({
      success: false,
      errMsg: 'Missing Role Query param',
    });
  }
  const roles = q.split(',');

  if (Array.isArray(roles)) {
    // Role Validation
    const filteredRoles = roles.filter((role) => !!ROLES[role]);

    if (filteredRoles.length > 0) {
      const forms = await FormService.getFormByRole(filteredRoles);
      res.status(200).json({
        success: true,
        forms,
      });
    } else {
      res.status(404).json({
        success: false,
        errMsg: 'The roles you are trying to get are not valid',
      });
    }
  }
};

const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        errMsg: SERVICE_ERRORS.MISSING_ID,
      });
    }

    const form = await FormService.getFormById(id);

    if (!form) {
      res.status(404).json({
        success: false,
        errMsg: SERVICE_ERRORS.RESOURCE_NOT_FOUND,
      });
    }

    res.status(200).json({
      success: true,
      form,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.toString(),
    });
  }
};

const createForm = async (req, res) => {
  try {
    // Role Validation
    const reqRoles = req.body.allowedRoles;
    if (Array.isArray(reqRoles)) {
      reqRoles.forEach((role) => {
        if (!ROLES[role]) {
          return res.status(400).json({
            success: false,
            errMsg: `The role: ${role} is not Valid`,
          });
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        errMsg: 'Bad Request: AllowedRoles must be an array',
      });
    }

    // Once role is validated, proceed to save the form
    const savedForm = await FormService.saveForm(req.body);

    return res.status(201).json({
      success: true,
      form: {
        _id: savedForm.id,
        name: savedForm.name,
      },
    });
  } catch (e) {
    res.error();
  }
};

module.exports = {
  createForm,
  getAllForms,
  getFormByRole,
  getFormById,
};
