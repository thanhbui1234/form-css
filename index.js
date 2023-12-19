const formm = document.querySelector("form");
formm.addEventListener("submit", function (event) {
  const username = document.querySelector("#name");
  const password = document.querySelector("#password");
  const statusInput = document.querySelector("#status");
  const textStatus = document.querySelector(".statusText");
  const errName = document.querySelector("#errName");
  const errPassword = document.querySelector("#errPassword");
  if (statusInput.checked) {
    textStatus.innerHTML = "ON";
  }
  if (!statusInput.checked) {
    textStatus.innerHTML = "ON";
  }

  if (username.value.length < 5) {
    username.classList.add("invalid");
    errName.innerHTML = "INVALID NAME";
    event.preventDefault();
  } else {
    username.classList.remove("invalid name");
    errName.innerHTML = "";
  }

  if (password.value.length < 5) {
    password.classList.add("invalid");
    errPassword.innerHTML = "INVALID PASSWORD";
    event.preventDefault();
  } else {
    password.classList.remove("invalid");
    errPassword.innerHTML = "";
  }
});

const cancle = document
  .querySelector("#cancel")
  .addEventListener("click", (e) => {
    console.log("hi");
    const username = document.querySelector("#name");
    const password = document.querySelector("#password");
    const errName = document.querySelector("#errName");
    const errPassword = document.querySelector("#errPassword");
    const statusInput = document.querySelector("#status");
    username.classList.remove("invalid");
    errName.innerHTML = "";
    password.classList.remove("invalid");
    errPassword.innerHTML = "";
  });
