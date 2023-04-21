let slideIndex = 0;
let itemsArray = document.getElementsByClassName("user-input-quantity");
let priceArray = document.querySelectorAll(".subtotal");
let totalPrice = 0;

showSlides();

Array.prototype.forEach.call(itemsArray, update);

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

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}
