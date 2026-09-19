var notifyBar = document.getElementById("notifyBar");
var closeButton = document.getElementById("closeButton");

if (closeButton && notifyBar) {
  closeButton.addEventListener("click", function () {
    notifyBar.style.display = "none";
  });
}

var contactName = document.getElementById("contactName");
var nameError = document.getElementById("nameError");

if (contactName && nameError) {
  contactName.addEventListener("input", function () {
    if (contactName.value == "") {
      nameError.style.display = "block";
    } else {
      nameError.style.display = "none";
    }
  });
}



// Research for input suggest

var searchInput = document.getElementById("searchInput");
var products = document.querySelectorAll(".new-arrivals_item");
var noresult = document.getElementById("noResult");
var categoryFilters = document.querySelectorAll(".category-filter");
var priceFilters = document.querySelectorAll(".price-filter");
var clearFilters = document.getElementById("clearFilters");

console.log("Search input:", searchInput);
console.log("Products:", products.length);

function showProducts() {
  var enteredvalue = searchInput.value.toUpperCase();
  var selectedCategories = [];
  var selectedPrices = [];
  var matchfound = false;

  categoryFilters.forEach(function (filter) {
    if (filter.checked) {
      selectedCategories.push(filter.value);
    }
  });

  priceFilters.forEach(function (filter) {
    if (filter.checked) {
      selectedPrices.push(filter.value);
    }
  });

  products.forEach(function (product) {
    var productName = product.querySelector(".item-srch").textContent.toUpperCase();
    var priceText = product.querySelector(".item-srch").nextElementSibling.textContent;
    var productPrice = parseInt(priceText.match(/\d+/)[0]);
    var categoryMatched = selectedCategories.length == 0;
    var priceMatched = selectedPrices.length == 0;

    selectedCategories.forEach(function (category) {
      if (productName.toLowerCase().includes(category)) {
        categoryMatched = true;
      }
    });

    selectedPrices.forEach(function (price) {
      if (price == "under-500" && productPrice < 500) {
        priceMatched = true;
      }
      if (price == "500-1500" && productPrice >= 500 && productPrice <= 1500) {
        priceMatched = true;
      }
      if (price == "over-1500" && productPrice > 1500) {
        priceMatched = true;
      }
    });

    if (productName.includes(enteredvalue) && categoryMatched && priceMatched) {
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
}

searchInput.addEventListener("keyup", showProducts);

categoryFilters.forEach(function (filter) {
  filter.addEventListener("change", showProducts);
});

priceFilters.forEach(function (filter) {
  filter.addEventListener("change", showProducts);
});

clearFilters.addEventListener("click", function () {
  categoryFilters.forEach(function (filter) {
    filter.checked = false;
  });

  priceFilters.forEach(function (filter) {
    filter.checked = false;
  });

  searchInput.value = "";
  showProducts();
});


var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closenav");
var menuicon = document.getElementById("menu-icon") || document.getElementById("menuicon");

if (menuicon && sidenav) {
  menuicon.addEventListener("click", function () {
    sidenav.style.right = "0";
  });
}

if (closenav && sidenav) {
  closenav.addEventListener("click", function () {
    sidenav.style.right = "-100%";
  });
}