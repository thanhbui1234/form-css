(function () {
  const customSelect = document.querySelector(".custom-select");
  const selectBtn = document.querySelector(".select-button");

  const selectedValue = document.querySelector(".selected-value");
  const optionsList = document.querySelectorAll(".select-dropdown li");

  // add click event to select button
  selectBtn.addEventListener("click", () => {
    // add/remove active class on the container element
    customSelect.classList.toggle("active");
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
      "aria-expanded",
      selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  optionsList.forEach((option) => {
    function handler(e) {
      // Click Events
      if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.children[1].textContent;
        customSelect.classList.remove("active");
      }
      // Key Events
      if (e.key === "Enter") {
        selectedValue.textContent = this.textContent;
        customSelect.classList.remove("active");
      }
    }

    option.addEventListener("keyup", handler);
    option.addEventListener("click", handler);
  });
})();

/////////////////////////////////////////////////////
const dropbtn = document.querySelector(".dropdown");
const iconSelect = document.querySelector(".icon-select");
dropbtn.addEventListener("click", () => {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("active");
  iconSelect.classList.toggle("icon-select-active");
});
////////////////
const statusInput = document.querySelector("#status");
const containerRadio = document.querySelector(".container-radio");
const textStatus = document.querySelector(".statusText");
const getChecked = () => {
  if (statusInput.checked) {
    containerRadio.classList.add("active-radio");
    textStatus.innerHTML = "ON";
  } else {
    containerRadio.classList.remove("active-radio");
    textStatus.innerHTML = "OFF";
  }
};

const username = document.querySelector("#name");
const password = document.querySelector("#password");
const errName = document.querySelector("#errName");
const errPassword = document.querySelector("#errPassword");
const iconErr = document.querySelector(".icon-err");
const iconErrPw = document.querySelector(".icon-err-password");

const removeErrName = (e) => {
  username.classList.remove("invalid");
  errName.innerHTML = "";
  iconErr.classList.remove("invalidIcon");
};
const removeErrPassword = (e) => {
  password.classList.remove("invalid");
  errPassword.innerHTML = "";
  iconErrPw.classList.remove("invalidIcon");
};

////////////////////////////////////
const formm = document.querySelector("form");

formm.addEventListener("submit", (e) => {
  const selectopt = document.querySelectorAll("input[name=dropdownOption]");
  let valueSelecOption;
  for (let i = 0; i < selectopt.length; i++) {
    if (selectopt[i].checked) {
      valueSelecOption = selectopt[i].value;
    }
  }
  console.log(valueSelecOption);

  const radioName = document.querySelectorAll("input[type=radio]");
  let valueInputName;
  let valueInputSelected;
  for (let i = 0; i < radioName.length; i++) {
    if (radioName[i].checked) {
      valueInputName = radioName[i].value;
    }
  }
  const optionSelect = document.querySelectorAll("option");
  for (let i = 0; i < optionSelect.length; i++) {
    if (optionSelect[i].selected) {
      valueInputSelected = optionSelect[i].value;
    }
  }

  const username = document.querySelector("#name");
  const password = document.querySelector("#password");
  const errName = document.querySelector("#errName");
  const errPassword = document.querySelector("#errPassword");
  const iconErr = document.querySelector(".icon-err");
  const iconErrPw = document.querySelector(".icon-err-password");
  if (username.value.length < 5) {
    username.classList.add("invalid");
    iconErr.classList.add("invalidIcon");
    errName.innerHTML = "Error message informing me of a problem";
    e.preventDefault();
  } else {
    username.classList.remove("invalid");
    iconErr.classList.remove("invalidIcon");
    errName.innerHTML = "";
  }
  if (password.value.length < 5) {
    password.classList.add("invalid");
    errPassword.innerHTML = "Your password is between 4 and 12 characters";
    iconErrPw.classList.add("invalidIcon");
    e.preventDefault();
  } else {
    password.classList.remove("invalid");
    iconErrPw.classList.remove("invalidIcon");
    errPassword.innerHTML = "";
  }
  const inputValues = {
    username: username.value,
    password: password.value,
    radio: valueInputName,
    dropdownOptipn: valueSelecOption,
  };
  console.log(inputValues);

  e.preventDefault();
});
/////////////////////////////
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
