console.log("app");

const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(input.value);
  console.log(form.tagName);
});
