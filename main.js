const btn = document.querySelector(".submit");
const btnClear = document.querySelector(".cancel");
const input = document.querySelector("input");
const list = document.querySelector(".list");
const xImg = document.querySelector(".xImg");


allData();

function allData() {
  // Add item
  btn.addEventListener("click", addItem);
  // Remove Item
  list.addEventListener("click", removeItem);
  // Clear Value
  btnClear.addEventListener("click", clearValue);
  // Hover Iamge
  list.addEventListener("mouseover", setNewImage);
  list.addEventListener("mouseout", setOldImage);
}

function addItem(e) {
  e.preventDefault();
  list.style.display = "block";
  let li = document.createElement("li");
  let text = (document.textContent = input.value);
  li.classList.add("list-item");
  li.append(text);
  let cancBtn = document.createElement("button");
  cancBtn.classList.add("list-btn");
  let cancImg = document.createElement("img");
  cancImg.setAttribute("class", "xImg");
  cancImg.setAttribute("src", "./image/Group 56.png");
  cancImg.setAttribute("alt", "");
  cancBtn.append(cancImg);
  li.append(cancBtn);
  list.append(li);
}

function removeItem(e) {
  if (e.target.lastChild == null) {
    e.target.parentElement.parentElement.remove();
    if(list.firstChild == null){
      list.style.display = "none";
    }
  }
}

function clearValue() {
  input.value = "";
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

