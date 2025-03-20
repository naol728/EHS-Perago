const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { checkbody } = require("./../middlewares/employeeMiddleware");
router
  .route("/")
  .get(employeeController.getEmployees)
  .post(checkbody, employeeController.createEmployee);

router
  .route("/:id")
  .get(employeeController.getEmployee)
  .patch(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = router;
