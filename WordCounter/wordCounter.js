const textarea = document.querySelector("textarea");

function counter() {
  let text = textarea.value;
  text = text.split(" ");
  console.log(text);
  console.log(text.length);
}

textarea.addEventListener("input", counter);
