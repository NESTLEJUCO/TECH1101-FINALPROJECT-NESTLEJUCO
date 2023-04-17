let itemQuantitiesArray = document.getElementsByClassName(
  "user-input-quantity"
);
let priceArray = document.querySelectorAll(".subtotal");
let totalPrice = 0;

Array.prototype.forEach.call(itemQuantitiesArray, update);

function update(val, i) {
  val.addEventListener("input", function () {
    var x = val.value;
    let subtotal = (
      x *
      document
        .getElementsByClassName("price-description")
        [i].getAttribute("data-amount")
    ).toFixed(2);
    priceArray[i].innerHTML = "$" + subtotal;
    updateTotal();
  });
}

function updateTotal() {
  totalPrice = 0;
  priceArray.forEach((element) => {
    if (element.innerHTML != "0")
      totalPrice += parseFloat(element.innerHTML.slice(1));
    else totalPrice += parseFloat(element.innerHTML.slice(0));
    document.getElementById("total").innerHTML = "$" + totalPrice.toFixed(2);
  });
}
