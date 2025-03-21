const db = require("../db/index");
const { eq } = require("drizzle-orm");
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
    const employees = await db.select().from(Employee);
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
