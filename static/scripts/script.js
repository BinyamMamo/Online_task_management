// document.getElementById('taskForm').addEventListener('submit', function (event) {
// 	event.preventDefault();
// 	var taskInput = document.getElementById('taskInput');
// 	var taskList = document.getElementById('taskList');
// 	var taskText = taskInput.value;
// 	if (taskText.trim() !== '') {
// 		var taskItem = document.createElement('div');
// 		taskItem.textContent = taskText;
// 		taskList.appendChild(taskItem);
// 		taskInput.value = '';
// 	}
// });

function collapse(caret) {
	let state = caret.parentElement.parentElement.querySelector('.group-body').style.display;
	if (state === 'none') {
		caret.parentElement.parentElement.querySelector('.group-body').style.display = 'block';
		caret.parentElement.parentElement.querySelector('.group-body').transion = '2s';
		caret.style.transform = 'rotate(180deg)';
		caret.style.transition = '0.1s';
	} else {
		caret.parentElement.parentElement.querySelector('.group-body').style.display = 'none';
		caret.parentElement.parentElement.style.border = 'none';
		caret.style.transform = 'rotate(0deg)';
		caret.style.transition = '0.1s';
	}
}

function promptYesNo(message, yes = "yes", no = "no") {
	return new Promise((resolve, reject) => {
		var confirmBox = document.getElementById("confirmBox");
		var yesButton = document.getElementById("yesButton");
		var noButton = document.getElementById("noButton");
		yesButton.innerHTML = yes;
		noButton.innerHTML = no;
		confirmBox.querySelector('p').innerHTML = message;
		confirmBox.style.display = "block";

		yesButton.addEventListener("click", function () {
			// User clicked "Yes"
			confirmBox.style.display = "none";
			resolve(true);
		});

		noButton.addEventListener("click", function () {
			// User clicked "No"
			confirmBox.style.display = "none";
			resolve(false);
		});
	});
}

function request(message, fun1, fun2=() => {}, yes = "yes", no = "no") {
	promptYesNo(message, yes, no).then((result) => {
		if (result) {
			// User clicked "Yes"
			fun1();
		} else {
			// User clicked "No"
			fun2();
		}
	});
}