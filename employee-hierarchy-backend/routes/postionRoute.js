const express = require("express");
const router = express.Router();
const postionControler = require("../controllers/postionControler");
const { checkbody } = require("./../middlewares/employeeMiddleware");
router
  .route("/")
  .get(postionControler.getPostions)
  .post(postionControler.createPostion);

router
  .route("/:id")
  .get(postionControler.getPostion)
  .patch(postionControler.updatePosition)
  .delete(postionControler.deletePostion);

module.exports = router;
