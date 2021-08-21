

//This is a function that updates the cost
function cost(product, value) {
  const productCost = document.getElementById('extra-' + product + '-cost');
  productCost.innerText = value;

  calculateTotal();
}

//this function calculates total cost
function calculateTotal() {

  const memoryCostText = document.getElementById('extra-memory-cost').innerText;
  const memoryCost = parseInt(memoryCostText);

  const storageCostText = document.getElementById('extra-storage-cost').innerText;
  const storageCost = parseInt(storageCostText)

  const deliveryChargeText = document.getElementById('extra-delivery-cost').innerText;
  const deliveryCharge = parseInt(deliveryChargeText);

  const totalCost = 1299 + memoryCost + storageCost + deliveryCharge;

  const total = document.getElementById('total-cost');
  total.innerText = totalCost
  const grandTotal = document.getElementById('grand-total');
  grandTotal.innerText = totalCost


  return totalCost;

}



// selection buttons
document.getElementById('8-gb-memory-button').addEventListener('click', function () {

  cost('memory', 0)
})


document.getElementById('16-gb-memory-button').addEventListener('click', function () {

  cost('memory', 180)
})


//storage selection buttons
document.getElementById('256-gb-storage-button').addEventListener('click', function () {

  cost('storage', 0)
})
document.getElementById('512-gb-storage-button').addEventListener('click', function () {

  cost('storage', 100)
})
document.getElementById('1-tb-storage-button').addEventListener('click', function () {

  cost('storage', 180)
})

document.getElementById('instant-delivery-button-0').addEventListener('click', function () {

  cost('delivery', 0)
})

document.getElementById('instant-delivery-button').addEventListener('click', function () {

  cost('delivery', 20)
})


//pomo code section 

document.getElementById('pomo-button').addEventListener('click', function () {

  const pomoInput = document.getElementById('pomo-input').value;


  if (pomoInput == 'stevekaku') {
    const beforeDiscount = calculateTotal()
    const withDiscount = beforeDiscount - (beforeDiscount * .2);


    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = withDiscount;

    document.getElementById('pomo-input').value = ''
  }

  else {
    const errorText = document.createElement('p');
    errorText.innerText = 'Sorry! the pomo code is not valid'

    const container = document.getElementById('container');
    container.appendChild(errorText)
    document.getElementById('pomo-input').value = ''
  }

})














