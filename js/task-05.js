const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const placeholder = (event) => {
  outputName.textContent =
    inputName.value.trim() !== "" ? event.currentTarget.value : "Anonymous";
};

inputName.addEventListener("input", placeholder);
