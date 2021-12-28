const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const { isAuth } = require('../middlewares/auth.middleware');

const router = Router();

/*
   Register
   POST api/user
*/
router.post('/', UserController.registerUser);

/*
   Retrieve User Info:
   GET api/user/session
*/
router.get('/session', isAuth, UserController.getUser);

/*
   Login:
   POST api/user/session
*/
router.post('/session', UserController.loginUser);

/*
   Logout
   DELETE api/user/session
*/
router.delete('/session', UserController.logoutUser);

module.exports = router;
