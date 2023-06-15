let lists = document.getElementsByClassName(".list")
// let right_box = document.getElementById("right")
// let left_box = document.getElementById("left")

// for (let lists of divChild) {
//   lists.addEventListener("dragstart", function(e){
//     let selected = e.target;
//     right_box.addEventListener("dragover",function(e){
//       e.preventDefault();
//       // console.log(dragging)
//     })
//      right_box.addEventListener("drop",function(e){
//       right_box.appendChild(divChild);
//       selected = null;
//     })
//   })
// }

const parentNode = document.getElementById("left") //parent node
let right_box = document.getElementById("right");


const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
// creating function to child node in to parent node

for (let task_item of tasks) {
  let paraChild1 = document.createElement("div");
  paraChild1.classList.add("list");
  paraChild1.draggable = "true"
  paraChild1.innerHTML = `<img src="icon/drag.png">${task_item}`;
  parentNode.appendChild(paraChild1);
  paraChild1.addEventListener("dragstart", function(e) {
    let paraChild2 = document.createElement("div")
    paraChild2 = e.target;
    right_box.addEventListener("dragover", function(e) {
      e.preventDefault();
      paraChild1.classList.add("hover")
    })
    right_box.addEventListener("drop", function(e) {
      right_box.appendChild(paraChild2);
    })
  });

}

function reset() {
  var container;
  location.reload(true) = function() {
    container = document.getElementById("left").innerHTML;
  };
}

const click = document.getElementById("btn")
click.addEventListener("click", reset)