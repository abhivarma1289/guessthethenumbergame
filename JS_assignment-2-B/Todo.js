const input = document.getElementById("inputt");
const button = document.getElementById("button");
const text = document.getElementById("lii");

button.addEventListener("click", () => {
  const todo_button_div = document.createElement("div");
  const divvv = document.createElement("div");
  const add_task = document.createElement("p");
  add_task.style.margin = "0px";
  add_task.textContent = input.value;
  add_task.style.width = "415px";
  add_task.style.marginLeft = "10px";
  add_task.style.marginBottom = "20px";
  add_task.style.color = "blue";
  divvv.append(add_task);
  divvv.append(todo_button_div);
  const buttonr = document.createElement("button");
  const buttonc = document.createElement("button");
  buttonc.textContent = "delete";
  buttonr.textContent = "add";
  todo_button_div.append(buttonr);
  todo_button_div.append(buttonc);
  buttonc.style.marginRight = "10px";
  buttonc.style.background = "red";
  buttonr.style.background = "lightgreen";
  buttonr.style.marginRight = "10px";
  buttonr.style.marginRight = "10px";
  text.append(divvv);
  divvv.style.display = "flex";
  divvv.style.marginTop = "20px";
  buttonc.addEventListener("click", () => {
    divvv.remove(add_task);
  });
  buttonr.addEventListener("click", () => {
    add_task.style.color = "lightgreen";
  });
});

const deleteAll = document.getElementById("del");
deleteAll.addEventListener("click", () => {
  // text.remove();
  text.innerHTML = "";
});
