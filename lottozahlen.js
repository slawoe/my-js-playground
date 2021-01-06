let numberOfFields = 6;
function genreateLottoNumbers() {
  let lottoNumbers = [];
  for (let i = 0; lottoNumbers.length < 6; i++) {
    let number = Math.floor(Math.random() * 49 + 1);
    if (lottoNumbers.includes(number)) {
      number = Math.floor(Math.random() * 49 + 1);
    } else {
      lottoNumbers.push(number);
      const numbers = lottoNumbers.sort((a, b) => {
        return a - b;
      });
    }
  }
  return lottoNumbers;
}

for (let i = 0; i < numberOfFields; i++) {
  console.log(genreateLottoNumbers());
  console.log("Lotto");
}

function genreateEuroJackpotNumbers() {
  let lottoNumbers = [];
  for (let i = 0; lottoNumbers.length < 5; i++) {
    let number = Math.floor(Math.random() * 50 + 1);
    if (lottoNumbers.includes(number)) {
      number = Math.floor(Math.random() * 50 + 1);
    } else {
      lottoNumbers.push(number);
      const numbers = lottoNumbers.sort((a, b) => {
        return a - b;
      });
    }
  }
  return lottoNumbers;
}

for (let i = 0; i < numberOfFields; i++) {
  console.log(genreateEuroJackpotNumbers());
  console.log("Euro");
}
