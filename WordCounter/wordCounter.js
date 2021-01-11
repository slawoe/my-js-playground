const textarea = document.querySelector("textarea");

function counter() {
  let text = textarea.value;
  console.log(text);
}

textarea.addEventListener("input", counter);
