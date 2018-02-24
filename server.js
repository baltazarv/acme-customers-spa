const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 3000;

db.sync()
  .then(() => db.seed());

app.get('/', (req, res, next) => {
  // servers pages
  res.sendFile(path.join(__dirname, '/index.html'));
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

app.listen(port, () => console.log(`Open http://localhost:${port}`));
