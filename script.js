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
	var taskList = document.getElementsByClassName('task-list')[0];
	taskList.setAttribute("class", "todolist todolist-active view");

	var list = document.createElement("li");
	list.setAttribute("class", "card task");
	var del = document.createElement('div');
	del.setAttribute("class", "delete-icon delete-task");

	var taskInfo = document.createElement('div');
	taskInfo.setAttribute("class", "task-info");
	var hdate = document.createElement('h3');
	var hdatetext = document.createTextNode(date);
	hdate.setAttribute("class", "task-date");

	var htime = document.createElement('h3');
	var htimetext = document.createTextNode(time);
	htime.setAttribute("class", "task-time");

	var detail = document.createElement('p');
	var detailtext = document.createTextNode(task);
	detail.setAttribute("class", "task-detail");

	hdate.appendChild(hdatetext);
	htime.appendChild(htimetext);

	detail.appendChild(detailtext);

	taskInfo.appendChild(hdate);
	taskInfo.appendChild(htime);

	list.appendChild(del);
	list.appendChild(taskInfo);
	list.appendChild(detail);

	taskList.appendChild(list);

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