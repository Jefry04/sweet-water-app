const crypto = require('crypto');

function genPassword(password) {
  const salt = crypto.randomBytes(32).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 5000, 64, 'sha512').toString('hex');

  return {
    salt,
    hash,
  };
}

function validPassword(password, hash, salt) {
  const genHash = crypto.pbkdf2Sync(password, salt, 5000, 64, 'sha512').toString('hex');
  return genHash === hash;
}

module.exports = {
  genPassword,
  validPassword,
};
