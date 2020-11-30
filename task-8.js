const inputRef = document.querySelector("[type = 'number']");
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector("#boxes");

inputRef.addEventListener("change", onInputNumber);
btnRender.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

let numberOfBoxes = 0;

function onInputNumber(event) {
  if (Number(event.target.value) > 0) {
    numberOfBoxes = Number(event.target.value);
  }
}

function createBox(size) {
  const newDivRef = document.createElement("div");

  newDivRef.style.border = "3px solid " + random_rgb();
  newDivRef.style.width = size + "px";
  newDivRef.style.height = size + "px";

  return newDivRef;
}

function createBoxes() {
  let createdBoxes = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    const size = 30 + i * 10;
    createdBoxes.push(createBox(size));
  }
  divBoxesRef.append(...createdBoxes);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = [];
  inputRef.value = "";
}

function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}
