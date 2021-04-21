const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const taskArea = document.querySelector(".js-task-area");

form.addEventListener("submit", (event) => {
  createTasks(event, input);
});

function createTasks(event, input) {
  event.preventDefault();
  const element = createTask(input.value);

  taskArea.insertAdjacentHTML("afterbegin", element);
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
