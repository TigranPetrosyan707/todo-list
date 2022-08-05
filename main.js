window.addEventListener("load", () => {
  const form = document.querySelector("#adding-task-form");
  const input = document.querySelector("#adding-task-input");
  const elementLists = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value) {
      alert("pleaser fill out it");
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskElement.appendChild(taskContent);

    const tasksInput = document.createElement("input");
    tasksInput.classList.add("text");
    tasksInput.type = "text";
    tasksInput.value = input.value;
    tasksInput.setAttribute("readonly", "readonly");

    taskContent.appendChild(tasksInput);

    const taskAction = document.createElement("div");
    taskAction.classList.add("action");

    const actionEdit = document.createElement("button");
    actionEdit.classList.add("edit");
    actionEdit.innerText = "edit";

    const actionDelete = document.createElement("button");
    actionDelete.classList.add("delete");
    actionDelete.innerText = "DELETE";

    taskAction.appendChild(actionEdit);
    taskAction.appendChild(actionDelete);

    taskElement.appendChild(taskAction);

    elementLists.appendChild(taskElement);

    input.value = "";

    actionEdit.addEventListener("click", () => {
      if (actionEdit.innerText === "edit") {
        tasksInput.removeAttribute("readonly");
        tasksInput.focus();
        actionEdit.innerText = "save";
      } else {
        tasksInput.setAttribute("readonly", "readonly");
        actionEdit.innerText = "edit";
      }
    });

    actionDelete.addEventListener("click", () => {
      elementLists.removeChild(taskElement);
    });
  });
});
