let numberOfFields;
let system;
const numbers = document.querySelector("#numbers");

function whichSystem() {
  systemAnswer = prompt("Welches System spielst Du? Lotto oder Euro?");
  system = systemAnswer.toLowerCase();
}
whichSystem();

function howManyFields() {
  numberOfFields = prompt("Wie viele Felder sollen gespielt werden?");
  if (numberOfFields === "") {
    numberOfFields = 12;
  }
}

function genreateNumbers(length, numberOfNumbers) {
  let numbers = [];
  for (let i = 0; numbers.length < length; i++) {
    let number = Math.floor(Math.random() * numberOfNumbers + 1);
    if (numbers.includes(number)) {
      number = Math.floor(Math.random() * numberOfNumbers + 1);
    } else {
      numbers.push(" " + number);
      numbers.sort((a, b) => {
        return a - b;
      });
    }
  }
  return numbers;
}

switch (system) {
  case "lotto":
    howManyFields();
    for (let i = 0; i < numberOfFields; i++) {
      const numbersDIV = document.createElement("span");
      numbersDIV.innerText = `Feld ${[i + 1]}: ${genreateNumbers(6, 49)}`;
      numbers.append(numbersDIV);
    }
    const numbersDIV = document.createElement("span");
    numbersDIV.innerText = `Die Zusatzzahl lautet: ${Math.floor(
      Math.random() * 9 + 1
    )}`;
    numbers.append(numbersDIV);
    break;
  case "euro":
    howManyFields();
    for (let i = 0; i < numberOfFields; i++) {
      const numbersDIV = document.createElement("span");
      const additionalnumbersDIV = document.createElement("span");
      numbersDIV.innerText = `Feld ${[i + 1]}: ${genreateNumbers(5, 50)}`;
      additionalnumbersDIV.innerText = `Zusatzzahlen lauten: ${genreateNumbers(
        2,
        10
      )}`;
      numbers.append(numbersDIV);
      numbers.append(additionalnumbersDIV);
    }
    break;
  default:
    prompt("System ist unbekannt. Bitte aktualisiere das Fenster!");
}
