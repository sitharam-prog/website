const btnEl = document.getElementById("calculate");
const n1Input = document.getElementById("n1");
const n2Input = document.getElementById("n2");
const operationSelect = document.getElementById("operation");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const n1 = parseFloat(n1Input.value);
  const n2 = parseFloat(n2Input.value);
  const operation = operationSelect.value;

  let result = "";

  if (isNaN(n1) || isNaN(n2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = n1 + n2;
        break;
      case "subtract":
        result = n1 - n2;
        break;
      case "multiply":
        result = n1 * n2;
        break;
      case "divide":
        result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation selected";
    }
  }

  totalSpan.innerText = result;
}

btnEl.addEventListener("click", calculateTotal);
