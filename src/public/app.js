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
    const task = createTask(element.task_name, element.state);
    taskArea.insertAdjacentHTML("afterbegin", task);
  }
}

taskArea.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON") {
    const task_name = event.target.parentNode.getAttribute("id-task");
    handleDeleteTask(task_name);
    return;
  }

  if (event.target.tagName !== "INPUT") return;
  const name_task = event.target.parentNode.getAttribute("id-task");

  if (event.target.checked) {
    console.log("Check");
    handleChangeState(true, name_task);
    return;
  } else {
    console.log("Not Check");
    handleChangeState(false, name_task);
    return;
  }
});

function handleDeleteTask(task_name) {
  fetch(`/todo/${task_name}`, {
    method: "DELETE",
  })
    .catch(console.log)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  console.log(task_name);
}

function handleChangeState(taskState, name_task) {
  fetch("/todo", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      state: taskState,
      nameTask: name_task,
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
  <li class="list-group-item d-flex justify-content-between" id-task="${text}">
    <div class="d-flex">
    <input
      class="form-check-input me-1"
      type="checkbox"
      value=""
      aria-label="..."
      ${state ? "checked" : ""}
    />
    <p class="m-0">${text}</p>
    </div>
    <button class="btn btn-outline-danger btn-sm fw-bold">X</button>
    </li>`;
}
