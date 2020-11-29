const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", onLostFocus);

const lengthRequired = Number(inputRef.attributes["data-length"].nodeValue);

function onLostFocus(event) {
  const lengthInput = event.target.value.length;
  inputRef.classList.add(lengthInput === lengthRequired ? "valid" : "invalid");
}
