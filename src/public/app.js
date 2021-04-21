const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const taskArea = document.querySelector(".js-task-area");

form.addEventListener("submit", (event) => {
  createTasks(event, input);
});

function createTasks(event, input) {
  event.preventDefault();
  const text_to_input = input.value;
  const element = createTask(input.value);
  taskArea.insertAdjacentHTML("afterbegin", element);

  fetch("/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      state: false,
      text: text_to_input,
    }),
  })
    .catch(console.log)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function createTask(text) {
  return `
  <li class="list-group-item">
    <input
      class="form-check-input me-1"
      type="checkbox"
      value=""
      aria-label="..."
    />
    ${text}
  </li>`;
}
