const passport = require('passport');
const UserService = require('../service/user.service');

const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  try {
    const existingUser = await UserService.getUserByUsername(username);

    if (existingUser !== null) {
      return res.status(400).json({
        success: false,
        errMsg: 'USER_ALREADY_CREATED',
      });
    }

    const savedUser = await UserService.saveUser({ username, password, firstName, lastName });

    return res.status(201).json({
      success: true,
      username: savedUser.username,
    });
  } catch (e) {
    res.error();
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) return next(err);

    // user will be set to false, if not authenticated
    if (!user) {
      res.status(401).json({
        success: false,
        errMsg: 'INVALID_CREDENTIALS',
      });
    } else {
      // if user authenticated maintain the session
      req.logIn(user, (loginErr) => {
        if (loginErr) return next(loginErr);
        return res.status(201).json({
          success: true,
          username: req.user.username,
        });
      });
    }
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.logout();
  res.json({
    success: true,
  });
};

const getUser = (req, res) => {
  if (!req.user) {
    res.json({
      success: true,
      user: null,
    });
  } else {
    res.json({
      success: true,
      user: {
        username: req.user.username,
      },
    });
  }
};

module.exports = {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
};
