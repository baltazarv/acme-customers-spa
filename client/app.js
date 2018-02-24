// client side js

let ulNode = document.getElementById('customerList');
fetch('/api/customers')
.then(response => response.json())
.then(data => {
  data.forEach(customer => {
    addCustomerToList(customer.id, customer.email);
  });
})
.catch(error => console.log(error));

const addCustomerToList = ((id, email) => {
  var liNode = document.createElement('li');
  // this also works:
    // liNode.append(email);
    // document.getElementById('customerList').append(liNode);
  let textNode = document.createTextNode(email);
  liNode.setAttribute('value', id);
  liNode.appendChild(textNode);
  liNode.addEventListener('click', function remove() {
    // remove listener before removing item
    liNode.removeEventListener('click', remove);
    liNode.remove();
    fetch(`/api/customers/${id}`, {
      method: 'DELETE'
    })
    .catch(err => console.log(err));
  });
  ulNode.appendChild(liNode);
});

const createBtn = document.getElementById('createButton');
const emailInput = document.getElementById('email');
createBtn.addEventListener('click', evt => {
  evt.preventDefault();
  fetch('/api/customers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: emailInput.value })
  })
    .then(res => {
      // console.log('response status', res.status)
      if (res.status === 200 || res.status === 201) return res.json();
      else return Error(`Need valid email`);
    })
    .then(data => {
      console.log('data', data);
      if (data.id) addCustomerToList(data.id, data.email);
    })
    .catch(err => console.log(err));
});
