const btnEl = document.getElementById("calculate");
const n1Input = document.getElementById("n1");
const n2Input = document.getElementById("n2");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const n1Value = n1Input.value;
  const n2Value = n2Input.value;
  const totalValue = n1Value*n2Value;
   totalSpan.innerText = totalValue;
}

btnEl.addEventListener("click", calculateTotal);