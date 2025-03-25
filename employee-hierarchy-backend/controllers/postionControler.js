const db = require("../db/index");
const { eq, count } = require("drizzle-orm");
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
    // pagination
    const limit = parseInt(req.query.limit) || 12;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    // calculating how many rows are there
    const totalRows = await db.select({ count: count() }).from(Positions);

    if (totalRows.at(0).count <= offset) {
      return res.status(400).json({
        message: "page not found",
      });
    }
    console.log(totalRows.at(0).count);
    console.log(offset);

    const postion = await db
      .select()
      .from(Positions)
      .limit(limit)
      .offset(offset);
    res.status(200).json({
      status: "sucesss",
      data: postion,
    });
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
  const positionId = req.query.params.id;
  try {
    const position = await db
      .select()
      .from(Positions)
      .where(eq(Positions.id, positionId))
      .first();

    if (!position) {
      return res.status(404).json({ message: "Position not found" });
    }

    if (position.parent_id === null) {
      return res
        .status(400)
        .json({ message: "Root position cannot be deleted" });
    }

    await db.delete(Positions).where(eq(Positions.id, positionId));
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
