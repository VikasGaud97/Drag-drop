//creating aaray to make  list of items 
const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

// creating function to child node in to parent node

function createTask() {
  for (let task_item of tasks) {
const parentNode = document.getElementById("task_box")//parent node
const divChild = document.createElement("div");//child node
divChild.innerHTML= ` <div id="task_list" draggable="true"><img src="icon/drag.png">${task_item}</div>`;
parentNode.appendChild(divChild); // adding childnode  into parentnode
  }
}
createTask();


//creating a function of dragging list from container

let list = document.querySelectorAll("#task_list");
let left_container = document.querySelectorAll("#task_box");

function drag(){
left_container.forEach((box)=>{
 box.addEventListener("dragstart",(e)=>{
    let selected = e.target;
    box.addEventListener("dragover",(e)=>{
      e.preventDefault();
      box.classList.add("hover");
      console.log(dragging)
    });
    
    //when we leave the drag to the container
    box.addEventListener("dragleave", () =>{
      box.classList.remove("hover")
      
    })
 

    
    //when dropping list into the container
      box.addEventListener("drop",(e)=>{
      box.appendChild(list);
      box.classList.remove("hover")
      box.classList.add("hover_on_drop")
    })
  })
})
}
drag()

//function reset
function reset(){
    var container = document.querySelectorAll("#task_list");
    var content = container.innerHTML;
    container.innerHTML= content;
}
reset();