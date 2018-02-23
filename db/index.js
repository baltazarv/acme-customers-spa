const conn = require('./conn');
const { Sequelize } = conn;
const Customer = require('./Customer');

module.exports = {
  models: {
    Customer
  }
};
