// Research for input suggest

var searchInput = document.getElementById("searchInput");
var products = document.querySelectorAll(".new-arrivals_item");
var noresult = document.getElementById("noResult");

console.log("Search input:", searchInput);
console.log("Products:", products.length);

searchInput.addEventListener("keyup", function () {
  var enteredvalue = searchInput.value.toUpperCase();
  var matchfound = false;

  products.forEach(function (product) {
    var productName = product
      .querySelector(".item-srch")
      .textContent.toUpperCase();

    if (productName.includes(enteredvalue)) {
      product.style.display = "";

      matchfound = true;
    } else {
      product.style.display = "none";
    }
  });

  if (matchfound) {
    noresult.style.display = "none";
  } else {
    noresult.style.display = "block";
  }
});


var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
    sidenav.style.right = "0"
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})
