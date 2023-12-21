/////////////////////////////////////////////////////
const dropbtn = document.querySelector(".dropdown");
const iconSelect = document.querySelector(".icon-select");
const dropdownContent = document.querySelector(".dropdown-content");
dropbtn.addEventListener("click", () => {
  // dropdownContent.classList.toggle("active");
  iconSelect.classList.toggle("icon-select-active");
});

const optionsClick = document.querySelectorAll('[role="option"]');
optionsClick.forEach((el) => {
  el.addEventListener("click", (e) => {
    const value = el.querySelector("input").value;
    const selectedValue = document.querySelector(".selected-value");
    selectedValue.innerHTML = value;
    dropdownContent?.classList?.remove("active");
  });
});

const handleDrop = () => {
  dropdownContent?.classList?.toggle("active");
};
const selectDown = document.querySelector(".select-dropdown");
document.addEventListener("click", function handleClickOutsideBox(e) {
  if (dropbtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent?.classList?.add("active");
  } else {
    dropdownContent?.classList?.remove("active");
  }
});

//////////////
const statusInput = document.querySelector("#status");
const containerRadio = document.querySelector(".container-radio");
const textStatus = document.querySelector(".statusText");
textStatus.innerHTML = "OFF";
const getChecked = () => {
  const removeRadioChecked = document.querySelectorAll("input[name=radioName]");
  if (statusInput.checked) {
    containerRadio.classList.add("active-radio");
    textStatus.innerHTML = "ON";
  } else {
    for (let i = 0; i < removeRadioChecked.length; i++) {
      if (removeRadioChecked[i].checked) {
        removeRadioChecked[i].checked = !removeRadioChecked[i].checked;
      }
    }
    containerRadio.classList.remove("active-radio");
    // containerRadio.style.display = "none";
    textStatus.innerHTML = "OFF";
  }
};

const username = document.querySelector("#name");
const password = document.querySelector("#password");
const errName = document.querySelector("#errName");
const errPassword = document.querySelector("#errPassword");
const iconErr = document.querySelector(".icon-err");
const iconErrPw = document.querySelector(".icon-err-password");
const radioName = document.querySelectorAll("input[type=radio]");

const removeErrName = (e) => {
  username.classList.remove("invalid");
  errName.innerHTML = "";
  iconErr.classList.remove("invalidIcon");
};
const removeErrPassword = (e) => {
  password.classList.remove("invalid");
  errPassword.innerHTML = "";
  iconErrPw.classList.remove("invalidIcon");

  for (let i = 0; i < radioName.length; i++) {
    if (radioName[i].checked) {
      console.log(radioName[i]);
      radioName[i].checked = !radioName[i].checked;
    }
  }
};

////////////////////////////////////
const formm = document.querySelector("form");
formm.addEventListener("submit", (e) => {
  let valueSelecOption;
  const selectopt = document.querySelectorAll("input[name=dropdownOption]");
  for (let i = 0; i < selectopt.length; i++) {
    if (selectopt[i].checked) {
      valueSelecOption = selectopt[i].value;
    }
  }

  const radioName = document.querySelectorAll("input[name=radioName]");
  let valueInputName;
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
  const status = document.querySelector("#status");
  const remember = document.querySelector("#remember");
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
    remember: remember.checked,
    setStatus: status.checked,
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
    const remember = document.querySelector("#remember");
    remember.checked = false;
    username.classList.remove("invalid");
    errName.innerHTML = "";
    password.classList.remove("invalid");
    errPassword.innerHTML = "";
    iconErr.classList.remove("invalidIcon");
    iconErrPw.classList.remove("invalidIcon");
  });
