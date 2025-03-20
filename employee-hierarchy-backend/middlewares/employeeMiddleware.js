const checkbody = (req, res, next) => {
  const { name, description, position_id } = req.body;

  if (!name || !description || !position_id) {
    res.status(400).json({
      message: "missing the required field",
    });
  } else {
    next();
  }
};

module.exports = { checkbody };
