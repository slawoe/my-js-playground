const textarea = document.querySelector("textarea");
const counterSpan = document.querySelector("#counter");
counterSpan.innerText = `Die Anzahl der Wörter beträgt: 0`;

function counter() {
  function indexAndDeleteUnneededSymbols() {
    if (text.indexOf("") > -1) {
      text.splice(text.indexOf(""), 1);
    }
    if (text.indexOf("-") > -1) {
      text.splice(text.indexOf("-"), 1);
    }
  }
  let text = textarea.value;
  text = text.split(`\n\n`).join(" ").split(`\n`).join(" ").split(" ");
  text.forEach((word) => indexAndDeleteUnneededSymbols());
  counterSpan.innerText = `Die Anzahl der Wörter beträgt: ${text.length}`;
}

textarea.addEventListener("input", counter);
