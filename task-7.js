const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  spanRef.style.fontSize = event.target.value + "px";
}
