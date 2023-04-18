"use strict";

init();
function init() {
  document.querySelector(".add").addEventListener("submit", addToDo);
  document.querySelector(".clear").addEventListener("click", clearTodoList);
  document.querySelector("ul").addEventListener("click", deleteOrCheck);
}

function deleteOrCheck(event) {
  if (event.target.className == "delete")
    deleteToDo(event); // - 버튼을 누르면 목록에서 항목 삭제
  else {
    checkToDo(event); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
  }
}

function deleteToDo(event) {
  // - 버튼을 누르면 목록에서 항목 삭제
  let remove = event.target.parentNode;
  let parentNode = remove.parentNode;

  parentNode.removeChild(remove);
}

function checkToDo(event) {
  // 체크박스를 클릭한 경우 글씨 색을 연하게, 중간선을 그어줌
  const todo = event.target.nextSibling;

  if (event.target.checked) {
    todo.style.color = "#b8b8b8";
    todo.style.textDecoration = "line-through";
  } else {
    todo.style.color = "#000000";
    todo.style.textDecoration = "none";
  }
}

function clearTodoList(event) {
  //목록 전체 삭제하는 경우
  let ul = (document.querySelector("ul").innerHTML = "");
}

function addToDo(event) {
  //새로운 할 일 추가하는 경우
  event.preventDefault();
  let toDoValue = document.querySelector("input");
  if (toDoValue.value !== "") addTask(toDoValue.value);
  // toDoValue 값이 빈칸이 아니면, input의 값으로 addTask 실행
  toDoValue.value = ""; //입력창 비워주기 초기화
}

function addTask(value) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `<div class="todo-content"><input type="checkbox" class="ck-box"></input><label>${value}</label></div>
          <button class="delete" type="button">ㅡ</button>`;
  ul.appendChild(li);
}
