const spanRef = document.querySelector("#value");
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
	let counterValue = Number(spanRef.innerText);
	counterValue -= 1;
	return (spanRef.textContent = counterValue);
}

function increment() {
	let counterValue = Number(spanRef.innerText);
	counterValue += 1;
	return (spanRef.textContent = counterValue);
}
