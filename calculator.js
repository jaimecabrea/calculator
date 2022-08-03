let total = 0;
let strbuffer = "0";
let operator;
const screen = document.querySelector(".result-screen");


function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total += intBuffer;
    }
    if (operator === "-") {
        total -= intBuffer;
    }
    if (operator === "x") {
        total *= intBuffer;
    }
    if (operator === "÷") {
        total /= intBuffer;
    }
}


function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;
    }
}


function makesSymbol(symbol) {
switch (symbol) {
    case "C":
        strbuffer = "0";
        total = 0;
        break;
    case "=":
        if (operator === null) {
            return;
        }
        calculations();
        operator = null;
        strbuffer = +total;
        total = 0;
        break;
    case "←":
        if (strbuffer.length === 1) {
            strbuffer = "0";
          } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1);
          }
          break;
    default:
        handleMath(symbol);
        break;
}
}

function handleMath(symbol) {
    if (strbuffer === "0") {
        return;
    }
    const intBuffer = parseInt(strbuffer);
  if (total === 0) {
    total = intBuffer;
  } else {
    calculations();
  }
  operator = symbol;
  strbuffer = "0";
}


function setListeners() {
document.querySelector(".rows").addEventListener("click", function(event) {
    buttonClicked(event.target.innerText);
  });
}

setListeners();

function buttonClicked(valueClicked) {
if (isNaN(parseInt(valueClicked))) { 
    makesSymbol(valueClicked);
} else {
    makesNumber(valueClicked);
}
screen.innerText = strbuffer;
}