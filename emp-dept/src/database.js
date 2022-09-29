const { DataSource } = require("typeorm");
require("dotenv").config();
const dataSource = new DataSource({
  type: process.env.name,
  host: process.env.host,
  port: process.env.port_ad,
  username: process.env.username,
  password: process.env.password,
  database: process.env.databaseName,
  entities: ["/home/tectoro/Desktop/emp-dept/src/entity/*.js"],
  migrations: ["migration/*.js"],
  migrationsTableName: "emp-depdb_migrations",
  cli: {
    entitiesDir: ["/home/tectoro/Desktop/emp-dept/src/entity/*.js"],
  },
  synchronize: true,
});
module.exports = { dataSource };
