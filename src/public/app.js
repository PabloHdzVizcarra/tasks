const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const taskArea = document.querySelector(".js-task-area");

fetch("/todo")
  .catch(console.log)
  .then((response) => response.json())
  .then((data) => {
    handleCreateInitialTasks(data.tasks);
  });

function handleCreateInitialTasks(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const task = createTask(element.text, element.state);
    taskArea.insertAdjacentHTML("afterbegin", task);
  }
}

taskArea.addEventListener("click", async (event) => {
  if (event.target.tagName !== "INPUT") return;

  if (event.target.checked) {
    console.log("Check");
    handleChangeState(true);
    return;
  } else {
    console.log("Not Check");
    handleChangeState(false);
    return;
  }
});

function handleChangeState(taskState) {
  fetch("/todo", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      state: taskState,
      nameTask: "example",
    }),
  });
}

form.addEventListener("submit", (event) => {
  createTasks(event, input);
});

function createTasks(event, input) {
  event.preventDefault();
  const text_to_input = input.value;
  if (!text_to_input) {
    return console.log("input value is not valid");
  }

  const task = createTask(text_to_input);
  taskArea.insertAdjacentHTML("afterbegin", task);

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

function createTask(text, state) {
  return `
  <li class="list-group-item" id-task="${text}">
    <input
      class="form-check-input me-1"
      type="checkbox"
      value=""
      aria-label="..."
      ${state ? "checked" : ""}
    />${text}</li>`;
}
