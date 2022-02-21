const { Form } = require('../models');

const getForms = async () => {
  try {
    return await Form.find({});
  } catch (e) {
    throw Error('Error while looking for All Forms');
  }
};

const getFormById = async (id) => {
  try {
    return await Form.findOne({ _id: id });
  } catch (e) {
    throw Error('Error while trying to get Form by ID');
  }
};

const getFormByRole = async (roles) => {
  try {
    return await Form.find({ allowedRoles: { $in: roles } });
  } catch (e) {
    throw Error('Error while trying to get Form by roles');
  }
};
const saveForm = async (form) => {
  // TODO: should we validate by name? to avoid repeated forms...

  const newForm = new Form(form);

  try {
    return await newForm.save();
  } catch (e) {
    throw Error('Error while saving Form');
  }
};

module.exports = {
  getForms,
  getFormById,
  getFormByRole,
  saveForm,
};
