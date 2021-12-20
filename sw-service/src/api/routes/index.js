// Starts here when the endpoint is called. And then it will call the controller
const { Router } = require('express');

const userRoute = require('./user.route');

const router = Router();

router.use('/user', userRoute);

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
