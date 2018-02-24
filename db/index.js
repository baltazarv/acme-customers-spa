const conn = require('./conn');
const { Sequelize } = conn;
const Customer = require('./Customer');

const sync = (() => {
  return Customer.sync({ force: true });
});

const data = [
  { email: 'Mizaru@monkey.com' },
  { email: 'Kikazaru@see.com' },
  { email: 'Iwazaru@do.com' }
];

const seed = (() => {
  data.forEach(dataItem => {
    Customer.create(dataItem);
  });
});

module.exports = {
  sync,
  seed,
  models: {
    Customer
  }
};
