const db = require("../db/index");
const { eq, count } = require("drizzle-orm");
const { Employee } = require("./../db/schema");
const createEmployee = async (req, res) => {
  const { name, description, position_id } = req.body;
  try {
    const newEmployee = await db
      .insert(Employee)
      .values({
        name,
        description,
        position_id,
      })
      .returning();

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create employee" });
  }
};

const getEmployees = async (req, res) => {
  try {
    // pagination
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    // calculating how many rows are there
    const totalRows = await db.select({ count: count() }).from(Employee);
    console.log(totalRows.at(0).count);
    console.log(offset);
    if (totalRows.at(0).count <= offset) {
      return res.status(400).json({
        message: "page not found",
      });
    }
    const employees = await db
      .select()
      .from(Employee)
      .limit(limit)
      .offset(offset);
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve employees" });
  }
};
const getEmployee = async (req, res) => {
  try {
    const employee = await db
      .select()
      .from(Employee)
      .where(eq(Employee.id, req.params.id));
    res.status(200).json(employee);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "failed to get a single employee",
    });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    await db.delete(Employee).where(eq(Employee.id, req.params.id));
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "faild to delete the data",
    });
  }
};
const updateEmployee = async (req, res) => {
  try {
    await db
      .update(Employee)
      .set(req.body)
      .where(eq(Employee.id, req.params.id));
    res
      .status(200)
      .json({ message: "Employee updated", updateddata: res.body });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "faild to update employee",
    });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
