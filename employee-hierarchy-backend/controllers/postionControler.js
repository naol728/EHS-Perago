const db = require("../db/index");
const { eq } = require("drizzle-orm");
const { Positions } = require("./../db/schema");
const createPostion = async (req, res) => {
  const { name, description, parent_id } = req.body;
  console.log(req.body);
  try {
    const newEmployee = await db
      .insert(Positions)
      .values({
        name,
        description,
        parent_id,
      })
      .returning();

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create employee" });
  }
};

const getPostions = async (req, res) => {
  try {
    const postion = await db.select().from(Positions);
    res.status(200).json(postion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve employees" });
  }
};
const getPostion = async (req, res) => {
  try {
    const postion = await db
      .select()
      .from(Positions)
      .where(eq(Positions.id, req.params.id));
    res.status(200).json(postion);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "failed to get a single employee",
    });
  }
};
const deletePostion = async (req, res) => {
  try {
    await db.delete(Positions).where(eq(Positions.id, req.params.id));
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "faild to delete the data",
    });
  }
};
const updatePosition = async (req, res) => {
  try {
    await db
      .update(Positions)
      .set(req.body)
      .where(eq(Positions.id, req.params.id));
    res.status(200).json({ message: "Employee updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "faild to update employee",
    });
  }
};

module.exports = {
  createPostion,
  getPostions,
  updatePosition,
  deletePostion,
  getPostion,
};
