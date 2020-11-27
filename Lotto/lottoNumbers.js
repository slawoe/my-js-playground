let lottoNumbers = [];
let numberOfFields;
let system;
const zusatzzahl = Math.floor(Math.random() * 10);

function whichSystem() {
  systemAnswer = prompt("Welches System wird gespielt? Lotto oder Euro?");
  system = systemAnswer.toLowerCase();
}
whichSystem();

if (system === "lotto") {
  function howManyFields() {
    numberOfFields = prompt(
      "Willkommen beim Lotto Generator. Wie viele Felder dürfen es sein?"
    );
    if (numberOfFields === "") {
      numberOfFields = 12;
    }
  }
  howManyFields();

  for (let i = 0; i < numberOfFields; i++) {
    for (let i = 0; i < 6; i++) {
      lottoNumbers[i] = Math.floor(Math.random() * 49 + 1);
      if (lottoNumbers[0] === lottoNumbers[1]) {
        lottoNumbers[1]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[2] ||
        lottoNumbers[1] === lottoNumbers[2]
      ) {
        lottoNumbers[2]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[3] ||
        lottoNumbers[1] === lottoNumbers[3] ||
        lottoNumbers[2] === lottoNumbers[3]
      ) {
        lottoNumbers[3]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[4] ||
        lottoNumbers[1] === lottoNumbers[4] ||
        lottoNumbers[2] === lottoNumbers[4] ||
        lottoNumbers[3] === lottoNumbers[4]
      ) {
        lottoNumbers[4]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[5] ||
        lottoNumbers[1] === lottoNumbers[5] ||
        lottoNumbers[2] === lottoNumbers[5] ||
        lottoNumbers[3] === lottoNumbers[5] ||
        lottoNumbers[4] === lottoNumbers[5]
      ) {
        lottoNumbers[5]++;
      } else if (lottoNumbers[i] === 50) {
        lottoNumbers[i] -= Math.floor(Math.random() * 48 + 1);
      }
      lottoNumbers[i] = ("0" + lottoNumbers[i]).slice(-2);
    }
    lottoNumbers.sort();
    console.log(`Feld ${[i + 1]}: ${lottoNumbers}`);
  }
  console.log(`Zusatzzahl lautet: ${zusatzzahl}`);
} else if (system === "euro") {
  function howManyFields() {
    numberOfFields = prompt(
      "Willkommen beim EuroJackpot-Generator. Wie viele Felder dürfen es sein?"
    );
    if (numberOfFields === "") {
      numberOfFields = 12;
    }
  }
  howManyFields();

  for (let i = 0; i < numberOfFields; i++) {
    for (let i = 0; i < 5; i++) {
      lottoNumbers[i] = Math.floor(Math.random() * 50 + 1);
      if (lottoNumbers[0] === lottoNumbers[1]) {
        lottoNumbers[1]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[2] ||
        lottoNumbers[1] === lottoNumbers[2]
      ) {
        lottoNumbers[2]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[3] ||
        lottoNumbers[1] === lottoNumbers[3] ||
        lottoNumbers[2] === lottoNumbers[3]
      ) {
        lottoNumbers[3]++;
      } else if (
        lottoNumbers[0] === lottoNumbers[4] ||
        lottoNumbers[1] === lottoNumbers[4] ||
        lottoNumbers[2] === lottoNumbers[4] ||
        lottoNumbers[3] === lottoNumbers[4]
      ) {
        lottoNumbers[4]++;
      } else if (lottoNumbers[i] === 51) {
        lottoNumbers[i] -= Math.floor(Math.random() * 49 + 1);
      }
      lottoNumbers[i] = ("0" + lottoNumbers[i]).slice(-2);
    }
    lottoNumbers.sort();
    console.log(`Feld ${[i + 1]}: ${lottoNumbers}`);
    let zusatzzahl = Math.floor(Math.random() * 10);
    let zusatzzahl2 = Math.floor(Math.random() * 10);
    if (zusatzzahl === zusatzzahl2) {
      console.log(`Zusatzzahlen lauten: ${zusatzzahl} + ${zusatzzahl2++}`);
    } else if (zusatzzahl2 === "10") {
      console.log(
        `Zusatzzahlen lauten: ${zusatzzahl} + ${(zusatzzahl2 -= Math.floor(
          Math.random() * 8 + 1
        ))}`
      );
    } else {
      console.log(
        `Die Zusatzzahlen lauten für Feld ${[
          i + 1,
        ]}: ${zusatzzahl} + ${zusatzzahl2}`
      );
    }
  }
} else {
  console.log("System ist unbekannt");
}
