document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".result");
  const buttons = document.querySelectorAll("input[type=button]");
  result.focus();

  document.addEventListener("mouseup", () => {
    result.focus();
  });

  result.addEventListener("keydown", (event) => {
    const allowed = ["ArrowLeft", "ArrowRight", "Backspace", "Delete"];
    if (allowed.indexOf(event.key) === -1) event.preventDefault();
  });

  const calculate = (value) => {
    value = value.replace(/x/g, "*");
    value = value.replace(/÷/g, "/");
    result.innerHTML = eval(value);
  };

  const editResult = (value) => {
    if (["-", "+", "÷", "x"].includes(value) && result.innerHTML.length === 0) return;
    if (["-", "+", "÷", "x"].includes(value) && ["-", "+", "÷", "x"].includes(result.innerHTML.charAt(result.innerHTML.length - 1))
    ) result.innerHTML = result.innerHTML.slice(0, -1) + value;
    else result.innerHTML += value;
  };

  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      switch (button.value) {
        case "C":
          result.innerHTML = "";
          break;
        case "←":
          result.innerHTML = result.innerHTML.slice(0, -1);
          break;
        case "=":
          calculate(result.innerHTML);
          break;
        default:
          editResult(button.value);
          break;
      }
    });
  });
});
