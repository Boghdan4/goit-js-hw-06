document.querySelector("body").style.fondSize = "16";
const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

function fontSizeControl(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}

inputRef.addEventListener("input", fontSizeControl);
