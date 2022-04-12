const { FormResponse } = require('../models');

const saveResponse = async (response) => {
  const formResponse = new FormResponse(response);

  try {
    return await formResponse.save();
  } catch (e) {
    throw Error(`Error while trying to save form response: \n${e.toString()}`);
  }
};

module.exports = {
  saveResponse,
};
