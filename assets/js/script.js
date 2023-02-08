// variables

const simpleBtns = document.querySelectorAll(".simple>.button");
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
          .replaceAll("cos", "Math.cos")
          .replaceAll("log", "Math.log2")
          .replaceAll("sqrt", "Math.sqrt")
          .replaceAll("tan", "Math.tan")
          .replaceAll("cot", "Math.cot");

        displayBottom.textContent = evaluation(String(eval(correct)));

        break;
      default:
        displayTop.textContent += clicked.textContent;
        break;
    }
  }
});
// TITLE : event listner baraye har dokme dar keyboard
window.addEventListener("keypress", match);

// functions

// TITLE : factorial calculation
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
// TITLE : radian calculation
function radian(deg) {
  return (deg * Math.PI) / 180;
}

// TITLE : hesab kardan araqame bad az ashar
// dar soorati ke adad ashari bood , va raqam haye bad az ashar az 5 raqam bishtar bood, 5 raqam ro bishtar dar safhe namayash neshoon nemide
// agar raqam bade ashar kamtar az 2 bood (0.5), 1 raqam be oon ezafe mishe (0.50)

function evaluation(str) {
  // if number is decimal
  if (Number(str) % 1 !== 0) {
    let strArray = str.split(".");
    let numbersAfterDecimal = strArray[1];

    if (numbersAfterDecimal.length > 5) {
      numbersAfterDecimal = numbersAfterDecimal.slice(0, 5);

      str = `${strArray[0]}.${numbersAfterDecimal}`;

      return str;
    } else if (numbersAfterDecimal <= 2) {
      str = Number(str).toFixed(2);
    }
    return str;
  }
  // if number is not decimal
  else {
    return str;
  }
}

// TITLE : Match keys
// agar kelidi az keyboard feshorde shod button motenazerash
// dar mashinhesab click shavad

function match(e) {
  simpleBtns.forEach((item) => {
    if (e.key == item.textContent) {
      item.click();
    } else if (e.key == "*") {
      if (item.textContent == "x") {
        item.click();
      }
    } else if (e.key == "Enter") {
      if (item.textContent == "=") {
        item.click();
      }
    }
  });
}
