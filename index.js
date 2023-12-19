const formm = document.querySelector("form");
formm.addEventListener("submit", function (event) {
  const username = document.querySelector("#name");
  const password = document.querySelector("#password");
  const statusInput = document.querySelector("#status");
  const textStatus = document.querySelector(".statusText");
  const errName = document.querySelector("#errName");
  const errPassword = document.querySelector("#errPassword");
  const iconErr = document.querySelector(".icon-err");
  const iconErrPw = document.querySelector(".icon-err-password");
  if (statusInput.checked) {
    textStatus.innerHTML = "ON";
  }
  if (!statusInput.checked) {
    textStatus.innerHTML = "ON";
  }

  if (username.value.length < 5) {
    username.classList.add("invalid");
    iconErr.classList.add("invalidIcon");
    errName.innerHTML = "Error message informing me of a problem";
    event.preventDefault();
  } else {
    username.classList.remove("invalid name");
    iconErr.classList.remove("invalidIcon");
    errName.innerHTML = "";
  }

  if (password.value.length < 5) {
    password.classList.add("invalid");
    errPassword.innerHTML = "Your password is between 4 and 12 characters";
    iconErrPw.classList.add("invalidIcon");
    event.preventDefault();
  } else {
    password.classList.remove("invalid");
    iconErrPw.classList.remove("invalidIcon");
    errPassword.innerHTML = "";
  }
});

const cancle = document
  .querySelector("#cancel")
  .addEventListener("click", (e) => {
    const iconErr = document.querySelector(".icon-err");
    const username = document.querySelector("#name");
    const password = document.querySelector("#password");
    const errName = document.querySelector("#errName");
    const errPassword = document.querySelector("#errPassword");
    const iconErrPw = document.querySelector(".icon-err-password");
    username.classList.remove("invalid");
    errName.innerHTML = "";
    password.classList.remove("invalid");
    errPassword.innerHTML = "";
    iconErr.classList.remove("invalidIcon");
    iconErrPw.classList.remove("invalidIcon");
  });
