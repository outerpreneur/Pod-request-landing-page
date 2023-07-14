const email = document.getElementById("email");
const emailValue = document.getElementById("email").value;
const form = document.querySelector("form");
const alertMsg = document.querySelector(".alert-message");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(email.value.length);
  if (validateEmail(email.value)) {
    alertMsg.style.display = "block";
    alertMsg.style.color = "green";
    alertMsg.textContent = "Success";
  } else {
    alertMsg.style.display = "block";
    alertMsg.style.color = "red";
    alertMsg.textContent = "Oops! Please check your email";
  }
});

email.addEventListener("keyup", (event) => {
  if (email.value.length < 1) {
    alertMsg.style.display = "block";
    alertMsg.textContent = "Oops! Please add your email";
  } else if (email.value.length >= 1) {
    alertMsg.style.display = "none";
  }
});
