const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", onLostFocus);

const lengthRequired = Number(inputRef.attributes["data-length"].nodeValue);

function onLostFocus(event) {
  const lengthInput = event.target.value.length;

  if (lengthRequired === lengthInput) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
