document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputNew = document.getElementById("validation-input");
inputNew.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputNew.dataset.length);
  const inputValueLength = inputNew.value.trim().length;

  if (inputDataLength === inputValueLength) {
    inputNew.classList.add("valid");
    inputNew.classList.remove("invalid");
  } else {
    inputNew.classList.add("invalid");
    inputNew.classList.remove("volid");
  }
}
