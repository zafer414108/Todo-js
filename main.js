//console.log('bağlantı')

const todoInput = document.getElementById("todoInput");
//console.log(todoInput)
const addBtn = document.getElementById("addBtn");
//console.log(addBtn)
const todoList = document.getElementById("todoList");
//console.log(todoList)

var todos = [];

addBtn.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("Yapılacaklar listeniz boş olamaz!");
    return;
  }
  const todoContainer = document.createElement("div");
  const todoText = document.createElement("h2");
  const buttonsContainer = document.createElement("div");
  const done = document.createElement("button");
  const deleteBtn = document.createElement("button");

  const todoId = new Date().getTime();
  todoText.innerText = todoInput.value;
  done.innerText = "Done";
  deleteBtn.innerText = "Delete";
  buttonsContainer.appendChild(done);
  buttonsContainer.appendChild(deleteBtn);

  todoContainer.appendChild(todoText);
  todoContainer.appendChild(buttonsContainer);
  todoContainer.classList.add("todoContainer");
  todoContainer.id = todoId;

  deleteBtn.addEventListener("click", function () {
    //console.log(todos[0].id)
    deleteTodo(todoId);
    //todoText.classList.toggle("done")

  });


  done.addEventListener('click', function(){
    updateTodo(todoId)

  })

  todos.push(todoContainer);
  appendTodos();

  //   todoList.appendChild(todoContainer)

  todoInput.value = "";
});

function appendTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    todoList.appendChild(todos[i]);
  }
}

function deleteTodo(id) {
  var tempArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id != id) {
      tempArr.push(todos[i]);
    }
  }
  todos = tempArr;
  appendTodos();
}

function updateTodo(id){
  for(let i=0; i<todos.length; i++){
    if(todos[i].id ==id){
      todos[i].classList.toggle("done")
    }
  }
}