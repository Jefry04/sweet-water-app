module.exports.errorMiddleware = (err, req, res, next) => {
  if (err) {
    res.status(500).json({
      success: false,
      errMsg: 'GENERAL_ERROR',
    });
  }
  next();
};
