//get the form element
var taskform = document.getElementById("task-form");

// var taskview = document.getElementById("task-list");

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
	// var taskForm = document.getElementById("task-form");
	taskform.setAttribute("class", "create-task create-task-inactive view");

	//display the task-list div
	var taskList = document.getElementById('task-list');
	taskList.setAttribute("class", "todolist todolist-active view");

	//create a list element and set the class attribute
	var list = document.createElement("li");
	list.setAttribute("class", "card task");
	
	//create a div element and set the class attribute
	var del = document.createElement('div');
	del.setAttribute("class", "delete-icon delete-task");

	//create another div element and set the class attribute
	var taskInfo = document.createElement('div');
	taskInfo.setAttribute("class", "task-info");
	
	//create a h3 element and set the class attribute and innerhtml element or textNode
	var hdate = document.createElement('h3');
	hdate.innerHTML = date;
	// var hdatetext = document.createTextNode(date);
	hdate.setAttribute("class", "task-date");

	//create a h3 element and set the class attribute and innerhtml element or textNode
	var htime = document.createElement('h3');
	htime.innerHTML = time;
	// var htimetext = document.createTextNode(time);
	htime.setAttribute("class", "task-time");

	//create a p tag element and set the class attribute
	var detail = document.createElement('p');
	detail.innerHTML = task;
	// var detailtext = document.createTextNode(task);
	detail.setAttribute("class", "task-detail");

	// hdate.appendChild(hdatetext);
	// htime.appendChild(htimetext);

	// detail.appendChild(detailtext);

	//append the date and time element/value to the taskinfo element
	taskInfo.appendChild(hdate);
	taskInfo.appendChild(htime);

	//append the div for the delete icon
	list.appendChild(del);

	//append the taskinfo to the list element
	list.appendChild(taskInfo);
	list.appendChild(detail);

	//append the list element to the tasklist element
	taskList.appendChild(list);

	//prevent the default click action from taking place
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