const conn = require('./conn');
const { Sequelize } = conn;

const Customer = conn.define('customer', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Customer;
