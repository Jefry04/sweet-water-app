// Starts here when the endpoint is called. And then it will call the controller
const { Router } = require('express');

const userRoute = require('./user.route');
const employeeRoute = require('./employee.route');
const formRoute = require('./form.route');

const router = Router();

router.use('/user', userRoute);
router.use('/employee', employeeRoute);
router.use('/forms', formRoute);

/*
  GET api/status
*/
router.get('/status', (req, res) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
    session: req.session,
    username: req.user && req.user.username,
  });
});

module.exports = router;
