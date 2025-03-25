const { pgTable, serial, text, integer } = require("drizzle-orm/pg-core");

const Positions = pgTable("positions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  parent_id: integer("parent_id").references(() => Positions.id, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  }),
});

const Employee = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  position_id: integer("position_id"),
});
module.exports = { Positions, Employee };
