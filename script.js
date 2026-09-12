var notifyBar = document.getElementById("notifyBar");
var closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function () {
  notifyBar.style.display = "none";
});

var contactName = document.getElementById("contactName");
var nameError = document.getElementById("nameError");

contactName.addEventListener("input", function () {
  if (contactName.value == "") {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});

var contactEmail = document.getElementById("contactEmail");
var emailError = document.getElementById("emailError");
var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

contactEmail.addEventListener("input", function () {
  if (contactEmail.value == "") {
    emailError.stlye.display = "block";
  } else {
    emailError.style.display = "none";
  }
  if (!regex.test(contactEmail.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
  if (contactEmail.value == "") emailError.style.display = "none";
});

var contactSubject = document.getElementById("contactSubject");
var subjectError = document.getElementById("subjectError");

contactSubject.addEventListener("input", function () {
  if (contactSubject.value == "") {
    subjectError.style.display = "block";
  } else {
    subjectError.style.display = "none";
  }
});

var closeButton = document.getElementById("closeButton");
var notifyBar = document.getElementById("notifyBar");
closeButton.addEventListener("click", function () {
  notifyBar.style.display = "none";
});
