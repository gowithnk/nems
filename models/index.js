const dbConfig = require("../config/dbConfig");

const { sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    aquare: dbConfig.pool.aquare,
    idle: dbConfig.pool.idle,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Products = require("./productModel.js")(sequelize, DataTypes);
db.Reviews = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
  .then(() => {
    Console.log("Re-sync DONE!");
  })
  .catch((err) => {
    Console.log("Re-sync ERROR!" + err);
  });

module.exports = db;
