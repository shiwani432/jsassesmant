const btn = document.getElementById('addTask')
let a = document.getElementById("item")

btn.addEventListener("click", ()=>{
   let abc = document.getElementById("taskInput").value

   let li = document.createElement('li')
// li creat
   li.innerHTML = abc
   a.appendChild(li)
   document.getElementById("taskInput").value=" "
   
  // Add task to Local Storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(abc);
  localStorage.setItem("tasks", JSON.stringify(tasks));

//   document.getElementById("taskInput").value = " ";
})
