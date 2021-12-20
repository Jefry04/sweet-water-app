const { User } = require('../models');
const { genPassword } = require('../../lib/passwordUtils');

const getUserByUsername = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (e) {
    throw Error('Error while looking for Users');
  }
};

const saveUser = async ({ username, password, firstName, lastName }) => {
  const { hash, salt } = genPassword(password);

  const newUser = new User({
    username,
    password: hash,
    salt,
    firstName,
    lastName,
  });
  try {
    return await newUser.save();
  } catch (e) {
    throw Error('Error while saving Users');
  }
};

module.exports = {
  getUserByUsername,
  saveUser,
};
