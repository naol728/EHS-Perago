const { pgTable, serial, text, integer } = require("drizzle-orm/pg-core");

const Positions = pgTable("positions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  parent_id: integer("parent_id"),
});

const Employee = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  position_id: integer("position_id").references(() => Positions.id),
});
module.exports = { Positions, Employee };
