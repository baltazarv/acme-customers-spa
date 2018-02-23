const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  // servers pages
});

app.get('/api/customers', (req, res, next) => {
  // gets all customers
});

app.post('/api/customers/:id', (req, res, next) => {
  // create a customer and return it
});

app.delete('/api/customers/:id', (req, res, next) => {
  // delete a customer
});

module.exports = app;
