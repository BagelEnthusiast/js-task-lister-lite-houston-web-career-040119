document.addEventListener("DOMContentLoaded", function() {
  // your code here
const text = document.getElementById("new-task-description")
const btn = document.querySelectorAll("input")
const button = btn[1]
const form = document.getElementById("create-task-form")
form.addEventListener("submit", function(e){
  e.preventDefault()
  console.log("Hi")
  let task = e.target[0].value

  tasks = document.getElementById("tasks")
  
  // debugger
  let deleteButton = document.createElement("button")
  deleteButton.addEventListener("click", function(e) {
    console.log(e.target.parentElement)

  })
  let todoList = document.createElement("li")
  todoList.innerHTML = task
  todoList.append(deleteButton)
  tasks.append(todoList)


  let box = document.getElementById("list")


})
})
// // debugger
// button.addEventListener("submit", function(){console.log("Hi")})

// //debugger
// });

// document.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
// })


