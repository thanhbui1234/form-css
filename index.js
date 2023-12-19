const username = document.querySelector("#name");
const statusInput = document.querySelector("#status");
const textStatus = document.querySelector(".statusText");
const formm = document.querySelector("form");
formm.addEventListener("submit", function (event) {
  if (statusInput.checked) {
    textStatus.innerHTML = "ON";
  }
  if (!statusInput.checked) {
    textStatus.innerHTML = "ON";
  }

  if (username.value.length > 5) {
    console.log("ok");
  }
  event.preventDefault();
});
