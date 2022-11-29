const btn = document.querySelector(".submit");
const btnClear = document.querySelector(".cancel");
const sortBtn = document.querySelector(".btn-one");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const xImg = document.querySelector(".xImg");


allData();
function allData() {
  // Add item
  btn.addEventListener("click", createItem);
  // Remove Item
  list.addEventListener("click", removeItem);
  // Clear Value
  btnClear.addEventListener("click", clearValue);
  // Hover Iamge
  list.addEventListener("mouseover", setNewImage);
  list.addEventListener("mouseout", setOldImage);
  // Hover Sort
  sortBtn.addEventListener("mouseout", hoverOutSort);
  // Sort Area
  sortBtn.addEventListener("click", sortList);
}

function createItem(e) {
  e.preventDefault();
  list.style.display = "block";

  saveTodosLS(input.value);

  // Create li
  li = document.createElement("li");
  li.classList.add("list-item");
  // Create Span
  span = document.createElement("span");
  span.innerText = input.value;
  li.append(span);
  // Create Button
  cancBtn = document.createElement("button");
  cancBtn.classList.add("list-btn");
  // Create Image
  cancImg = document.createElement("img");
  cancImg.classList.add("xImg");
  cancImg.src = "./image/Group 56.png";
  cancImg.setAttribute("alt", "");
  cancBtn.append(cancImg);
  li.append(cancBtn);
  list.append(li);
}

function removeItem(e) {
  e.target;
  if (e.target.lastChild == null) {
    const todo = e.target.parentElement.parentElement;
    removeLS(todo);
    todo.remove();
    if (list.firstChild == null) {
      list.style.display = "none";
    }
  }
}
function clearValue() {
  return (input.value = "");
}
function setNewImage(e) {
  if (e.target.lastChild == null) {
    e.target.src = "./image/Group 70.png";
  }
}
function setOldImage(e) {
  if (e.target.lastChild == null) {
    e.target.src = "./image/Group 56.png";
  }
}

function hoverOutSort(e) {
  if (e.target.lastChild == null) {
    e.target.src = "./image/Group 38.png";
  }
}

sorted = true;

function sortList(e) {
  let arr = [];
  const liList = document.querySelectorAll("li");

  liList.forEach((item) => {
    arr.push(item.firstChild.innerText);
    console.log(item);
  });

  if (sorted) {
    arr.sort();
    sorted = false;
    liList.forEach((item, index) => {
      item.firstChild.innerText = arr[index];
    });
    if (e.target.lastChild == null) {
      e.target.src = "./image/Group 91.png";
    }
  } else if (!sorted) {
    arr.reverse();
    sorted = true;
    liList.forEach((item, index) => {
      console.log(item.innerText);
      item.firstChild.innerText = arr[index];
    });
    if (e.target.lastChild == null) {
      e.target.src = "./image/Group 73.png";
    }
  }
}

function saveTodosLS(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    list.style.display = "block";
    // Create li
    li = document.createElement("li");
    li.classList.add("list-item");
    // Create Span
    span = document.createElement("span");
    span.innerText = todo;
    li.append(span);
    // Create Button
    cancBtn = document.createElement("button");
    cancBtn.classList.add("list-btn");
    // Create Image
    cancImg = document.createElement("img");
    cancImg.classList.add("xImg");
    cancImg.src = "./image/Group 56.png";
    cancImg.setAttribute("alt", "");
    cancBtn.append(cancImg);
    li.append(cancBtn);
    list.append(li);
  });
}
getTodos();

function removeLS(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
