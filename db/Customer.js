const conn = require('./conn');
const { Sequelize } = conn;

const Customer = conn.define('customer', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Customer;
