// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  const subTotalquantity = price.innerHTML * quantity.value;
  subTotal.innerHTML = subTotalquantity;

  return subTotalquantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach((product) => {
    let eachPrice = updateSubtotal(product);
    totalPrice += eachPrice;
  });

  // ITERATION 3
  const totalDOM = document.querySelector('#total-value span');
  totalDOM.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // const removeBtns = document.querySelectorAll('.btn-remove');

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newInputName = document.querySelector('#product-name');
  const newInputPrice = document.querySelector('#product-price');

  const nameValue = newInputName.value;
  const priceValue = newInputPrice.value;

  const tBodyDOM = document.querySelector('tbody');
  const newProduct = document.createElement('tr');
  newProduct.className = 'product';

  newProduct.innerHTML = `
  <td class="name">
    <span>${nameValue}</span>
  </td>
  <td class="price">$<span>${priceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  `;

  const deleteBtns = newProduct.querySelector('.btn-remove');
  deleteBtns.addEventListener('click', removeProduct);

  newInputName.value = '';
  newInputPrice.value = '';

  tBodyDOM.append(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createProducts = document.querySelector('#create');
  createProducts.addEventListener('click', createProduct);
});
