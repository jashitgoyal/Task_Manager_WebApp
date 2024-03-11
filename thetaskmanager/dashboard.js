"use strict"
// Adding Tasks
let taskName = ""
const addTaskBtns = document.getElementsByClassName("addtaskbtn");
const taskModal = document.getElementById('task-modal');
const closeButton = document.querySelector('.close-button');
const submitButton = document.getElementById('submit-task');
const taskNameInput = document.getElementById('task-name');
//   addTaskBtns[0].addEventListener('click',adder_task);

  addTaskBtns[0].addEventListener('click', () => {
    taskModal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    taskModal.style.display = 'none';
  });

  submitButton.addEventListener('click', () => {
    let taskName = taskNameInput.value;
    taskModal.style.display = 'none';
    taskNameInput.value = '';

    adder_task(taskName);
})



function adder_task(taskName){
    let html_task = `<li>
<span class="tasksIconName">
    <span class="tasksIcon notDone"></span>
    <span class="tasksName">
        ${taskName}
    </span>
</span>
<span class="tasksStar full">
    <span class="material-symbols-outlined">
        star
    </span>
</span>
</li>`

    addTaskBtns[0].insertAdjacentHTML('beforebegin',html_task);
}


// Add timeline

var addTimelineBtns = document.getElementsByClassName("addtimelinebtn");

  addTimelineBtns[0].addEventListener('click',adder_timeline
  );

let html_timeline = `<li>
<span class="videoText">
    <span class="material-symbols-outlined">
        slideshow
    </span>
    <span class="text">
        Landing Page
    </span>
</span>
<span class="timelineTime">
    30:00
</span>
</li>`

function adder_timeline(){
    addTimelineBtns[0].insertAdjacentHTML('beforebegin',html_timeline);
}





// Projects section
let tasks = document.querySelector(".myTasks");
let timeline = document.querySelector(".timeline");
let calender = document.querySelector(".calendar");
let messages = document.querySelector(".messages");
let projectcards = document.querySelectorAll(".projectCard")
let projectadd = document.querySelector(".projectcardadder");
let main = document.querySelector("main");
projectadd.style.display = "none"
var addprojectBtns = document.querySelectorAll(".projectbtn");

// add project
// let padder  = document.querySelector(`.projectcardadd`);

// padder.addEventListener("click",function(){
//   console.log("hello");
// })

projectadd.addEventListener("click",function(){

  let projectname = prompt("Enter Your Project Name");
  let projectdead = prompt("Enter the deadline of your project");


  projectadd.insertAdjacentHTML("beforebegin",`<div class="projectCard projectCard2">
  <div class="projectTop">
      <h2>${projectname}<br><span>Company Name</span></h2>
      <div class="projectDots">
          <span class="material-symbols-outlined">
              more_horiz
          </span>
      </div>
  </div>
  <div class="projectProgress">
      <div class="process">
          <h2>In Progress</h2>
      </div>
      <div class="priority">
          <h2>High Priority</h2>
      </div>
  </div>
  <div class="groupImg">
      <a href="#">
          <img src="./groupImg/img1.jpg" alt="img1">
      </a>
      <a href="#" style="--left: -10px;">
          <img src="./groupImg/img2.jpg" alt="img2">
      </a>
      <a href="#" style="--left: -20px;">
          <img src="./groupImg/img3.jpg" alt="img3">
      </a>
      <a href="#" style="--left: -30px;">
          <img src="./groupImg/img4.jpg" alt="img4">
      </a>
      <a href="#" style="--left: -40px;">
          <img src="./groupImg/img5.jpg" alt="img5">
      </a>
      <a href="#" style="--left: -50px;">
          <span class="number">+3</span>
      </a>
  </div>
  <div class="task">
      <h2>Task Done: <bold>0</bold> / 50</h2>
      <span class="line"></span>
  </div>
  <div class="due">
      <h2>Due Date:${projectdead}</h2>
  </div>
</div>`);
})







for (var i = 0; i < addprojectBtns.length; i++) {
  addprojectBtns[i].addEventListener('click', function() {
    addprojectBtns[0].classList.add("full")
    tasks.style.display="none";
    timeline.style.display = "none";
    calender.style.display= "none";
    messages.style.display = "none";
    projectadd.style.display = "block";
    for(let i=0;i<projectcards.length;i++){
        projectcards[i].style.display='flex';
      }
      main.style.display = "grid";


});
}


var dashboardBtns = document.querySelectorAll(".dashboard__Btn");
console.log(dashboardBtns)
for (var i = 0; i < dashboardBtns.length; i++) {
    dashboardBtns[i].addEventListener('click', function() {
      location.reload();
      dashboardBtns[0].classList.add("full")
      tasks.style.display="block";
      timeline.style.display = "flex";
      calender.style.display= "flex";
      messages.style.display = "flex";
      projectadd.style.display = "none";
      for(let i=0;i<projectcards.length;i++){
        projectcards[i].style.display='flex';
      console.log(i)
      }
      
      main.style.display = "grid";

  });
  }
// console.log(main);
  var mytaskbtns = document.querySelectorAll(".mytaskbtn");
console.log(mytaskbtns)
for (var i = 0; i < dashboardBtns.length; i++) {
    mytaskbtns[i].addEventListener('click', function() {
      mytaskbtns[0].classList.add("full")
      tasks.style.display="flex";
      main.style.display = "flex";
      timeline.style.display = "none";
      calender.style.display= "none";
      messages.style.display = "none";
      projectadd.style.display = "none";
      for(let i=0;i<projectcards.length;i++){
        projectcards[i].style.display='none';
      }
  });
  }


  
var messageBtn = document.querySelectorAll(".messageBtn");
// console.log(mytaskbtns)
for (var i = 0; i < messageBtn.length; i++) {
    messageBtn[i].addEventListener('click', function() {
      messageBtn[0].classList.add("full")
      main.style.display = "flex";
      tasks.style.display="none";
      timeline.style.display = "none";
      calender.style.display= "none";
      messages.style.display = "flex";
      projectadd.style.display = "none";
      for(let i=0;i<projectcards.length;i++){
        projectcards[i].style.display='none';
      }
  });
  }

  // Dashboard js
let toggle = document.querySelector(".toggle");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let close = document.querySelector(".close");
let body = document.querySelector("body");
let searchBx = document.querySelector(".searchBx");
let searchOpen = document.querySelector(".searchOpen");
let searchClose = document.querySelector(".searchClose");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  left.classList.toggle("active");
  right.classList.toggsle("overlay");
  body.style.overflow = "hidden";
});
close.onclick = () => {
  toggle.classList.remove("active");
  left.classList.remove("active");
  right.classList.remove("overlay");
  body.style.overflow = "";
};
searchOpen.onclick = () => {
  searchBx.classList.add("active");
};
searchClose.onclick = () => {
  searchBx.classList.remove("active");
};
window.onclick = (e) => {
  if (e.target == right) {
    toggle.classList.remove("active");
    left.classList.remove("active");
    right.classList.remove("overlay");
    body.style.overflow = "";
  }
};


let taskstars = document.querySelectorAll(".tasksStar")

for(let i =0;i<taskstars.length;i++){
  taskstars[i].addEventListener("click",function(){
    taskstars[i].classList.toggle("full")
  })
}

