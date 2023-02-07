// variables

const buttons = document.querySelectorAll(".button");
const displayTop = document.querySelector(".displayTop");
const displayBottom = document.querySelector(".displayBottom");
const btnPart = document.querySelector("#buttons");

// TITLE : event listner baraye har dokme dar safhe
// bad az click shodan har dokme dar safhe, be nesbate shart haei ke vojood dare function calculate() run mishe

btnPart.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    const clicked = e.target;

    switch (clicked.textContent) {
      case "C":
        displayTop.textContent = "";
        displayBottom.textContent = "0";
        break;
      case "CE":
        displayTop.textContent = displayTop.textContent.slice(0, -1);
        break;
      case "x":
        displayTop.textContent += "*";
        break;
      case "sin":
        displayTop.textContent += "sin(";
        break;
      case "cos":
        displayTop.textContent += "cos(";
        break;
      case "tan":
        displayTop.textContent += "tan(";
        break;
      case "cot":
        displayTop.textContent += "cot(";
        break;
      case "log":
        displayTop.textContent += "log(";
        break;
      case "√":
        displayTop.textContent += "sqrt(";
        break;
      case "!":
        displayTop.textContent += "factorial(";
        break;
      case "Rad":
        // clicked.classList.toggle("on");
        displayTop.textContent += "radian(";

        break;
      case "=":
        // displayTop.textContent = "";
        const correct = displayTop.textContent
          .replaceAll("sin", "Math.sin")
          .replaceAll("log", "Math.log2")
          .replaceAll("sqrt", "Math.sqrt");
        console.log(correct);

        displayBottom.textContent =
          Number(eval(correct)) % 1 == 0
            ? eval(correct)
            : Number(eval(correct)).toFixed(2);
        // displayBottom.textContent = eval(correct);
        break;
      default:
        displayTop.textContent += clicked.textContent;
        break;
    }
  }
});

// functions

// TITLE : function calulate
// be nesbate meqdare dokme click shode dar safhe, amaliat haye mashin hesabo namayesh mide

function factorial(num) {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
function radian(deg) {
  return (deg * Math.PI) / 180;
}
