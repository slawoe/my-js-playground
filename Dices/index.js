const myDots = document.querySelectorAll(".dot");
const dice = document.querySelector(".dice");
const numberShown = document.querySelector("#number");

dice.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 6 + 1);
  myDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  switch (number) {
    case 1:
      myDots[0].classList.add("active");
      break;
    case 2:
      myDots[0].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 3:
      myDots[0].classList.add("active");
      myDots[4].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 4:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 5:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[4].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 6:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[3].classList.add("active");
      myDots[5].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    default:
      console.log("Number not found");
  }
  numberShown.innerText = ` ${number}!`;
});
