const btn = document.querySelector(".submit");
const btnClear = document.querySelector(".cancel");
const sortBtn = document.querySelector(".btn-one");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const xImg = document.querySelector(".xImg");

// let arr = [];

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
  sortBtn.addEventListener("mouseover", hoverNewSort);
  sortBtn.addEventListener("mouseout", hoverOutSort);
  // Sort List
  sortBtn.addEventListener("click", sortList);
}

function createItem(e) {
  e.preventDefault();
  list.style.display = "block";

  saveTodosLS(input.value);
  // Create li
  let li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("list-item");
  // Create Button
  let cancBtn = document.createElement("button");
  cancBtn.classList.add("list-btn");
  // Create Image
  let cancImg = document.createElement("img");
  cancImg.setAttribute("class", "xImg");
  cancImg.setAttribute("src", "./image/Group 56.png");
  cancImg.setAttribute("alt", "");

  cancBtn.append(cancImg);
  li.append(cancBtn);
  list.append(li);

  // // Sort Area
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

function hoverNewSort(e) {
  if (e.target.lastChild == null) {
    e.target.src = "./image/Group 91.png";
  }
}
function hoverOutSort(e) {
  if (e.target.lastChild == null) {
    e.target.src = "./image/Group 90.png";
  }
}

function sortList() {
  const liList = document.querySelectorAll("li");

  let arr = [];

  liList.forEach((item) => {
    arr.push(item);
  });

  arr.sort(function (a, b) {
    if (a.textContent > b.textContent) return -1;
    if (a.textContent < b.textContent) return 1;
    return 0;
  });

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].textContent);
    list.insertBefore(arr[i], list.firstChild);
  }

  arr.reverse();

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
    let li = document.createElement("li");
    li.innerText = todo;
    li.classList.add("list-item");
    // Create Button
    let cancBtn = document.createElement("button");
    cancBtn.classList.add("list-btn");
    // Create Image
    let cancImg = document.createElement("img");
    cancImg.setAttribute("class", "xImg");
    cancImg.setAttribute("src", "./image/Group 56.png");
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
