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