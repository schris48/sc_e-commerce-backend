require('dotenv').config();
const cls = require('cls-hooked');
const namespace = cls.createNamespace("....");
const Sequelize = require('sequelize');

Sequelize.useCLS(namespace)

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
      port: 8000
    }
  });
};

module.exports = sequelize;
