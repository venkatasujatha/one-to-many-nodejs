const EntitySchema = require("typeorm").EntitySchema;

const employee = new EntitySchema({
  name: "employee",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    empName: {
      type: "varchar",
    },
  },
  relations: {
    dept: {
      target: "dept",
      type: "many-to-one",
      joinColumn: true,
      joinTable: true,
      inverseSide: "employee",
    },
  },
});

module.exports = { employee };
