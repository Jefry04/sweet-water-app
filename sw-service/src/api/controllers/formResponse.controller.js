const Formservice = require('../service/form.service');
const FormResponseService = require('../service/formResponse.service');
const { SERVICE_ERRORS } = require('../../lib/constants');

const saveFormResponse = async (req, res) => {
  try {
    // First, we validate if the form you are trying to save, exists.
    const { formId, response, user } = req.body;
    // TODO : Validate USER
    if (!formId) {
      return res.status(400).json({
        success: false,
        err: SERVICE_ERRORS.BAD_REQUEST,
        errMsg: 'The body parameter: formId is mandatory',
      });
    }

    const formContent = await Formservice.getFormById(formId);

    if (!formContent) {
      return res.status(404).json({
        succes: false,
        err: SERVICE_ERRORS.RESOURCE_NOT_FOUND,
        errMsg: `The form with ID: ${formId}, does not exists`,
      });
    }

    // Once id is validated and content is retrieved, we save the response.
    const savedFormResponse = await FormResponseService.saveResponse({
      formId,
      response,
      formContent,
      savedBy: user,
    });

    return res.status(201).json({
      success: true,
      responseId: savedFormResponse.id,
      timestamp: savedFormResponse.updatedAt,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.toString(),
    });
  }
};

const getFormResponse = async (req, res) => {
  const { body } = req;
  return res.json(body);
};

const getFormResponseById = async (req, res) => {
  const { body } = req;
  return res.json(body);
};

module.exports = {
  getFormResponse,
  getFormResponseById,
  saveFormResponse,
};
