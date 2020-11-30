const spanRef = document.querySelector("#value");
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  const counterValue = Number(spanRef.innerText);
  spanRef.textContent = counterValue - 1;
}

function increment() {
  const counterValue = Number(spanRef.innerText);
  spanRef.textContent = counterValue + 1;
}
