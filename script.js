//get the form element
var taskform = document.getElementById("task-form");

var taskview = document.getElementById("task-list");

taskform.addEventListener('submit', function(e) {
	//get the value of the date input fields
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;

	// assign the date input field values to var date
	var date = day + " " + month + " " + year;

	//get the task input
	var task = document.getElementById("task").value;

	//get the time of task
	var time = document.getElementById("time").value;

	//hide the create task form div
	var taskForm = document.getElementById("task-form");
	taskForm.setAttribute("class", "create-task create-task-inactive view");

	//display the task-list div
	var taskList = document.getElementById('task-list');
	taskList.setAttribute("class", "todolist todolist-active view");

	// var showinfo = document.getElementById("show-task");

	var d = document.getElementById("task-date");
	d.innerHTML = date;

	var tasks = document.getElementById("task-detail");
	tasks.innerHTML = task;

	var tt = document.getElementById("task-time");
	tt.innerHTML = time;

	
	// var task_List = document.getElementById("show-task");
	// var list = document.createElement("li");
	// var taskDate = document.createTextNode(d);
	// var taskInfo = document.createTextNode(tasks);
	// var taskTime = document.createTextNode(tt);

	// list.appendChild(taskDate);
	// list.appendChild(taskInfo);
	// list.appendChild(taskTime);
	// task_List.appendChild(list);
	// console.log(taskList.childNodes);
	
e.preventDefault();
}, false); 

var write = document.getElementById("write");
write.addEventListener("click", function(e) {
	//show the create task form div again
	var taskForm = document.getElementById("task-form");
	taskForm.setAttribute("class", "create-task create-task-active view");

	//prevent the default click action from taking place
	e.preventDefault();
}, false);