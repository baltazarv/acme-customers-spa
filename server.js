const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const db = require('./db');
const { Customer } = db.models;
const bodyParser = require('body-parser');

db.sync()
  .then(() => db.seed());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

// gets all customers
app.get('/api/customers', (req, res, next) => {
  Customer.findAll()
  .then(customers => res.json(customers))
  .catch(next);
});

// create a customer and return it
app.post('/api/customers', (req, res, next) => {
  if ( req.body.email) {
    Customer.findOrCreate({
      where: {
        email: req.body.email
      }
    })
    .spread((user, created) => {
      if (created) res.json(user);
      else res.status(500).json({ error: 'Customer already exists.' });
    })
    .catch(err => {
      res.json(err);
    });
  }
});

// delete a customer
app.delete('/api/customers/:id', (req, res, next) => {
  Customer.findById(req.params.id)
  .then(customer => {
    customer.destroy();
  })
  .then(() => res.sendStatus(200)) // to avoid 404 error
  .catch(next);
});

app.listen(port, () => console.log(`Open http://localhost:${port}`));
