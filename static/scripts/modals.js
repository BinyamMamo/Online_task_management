// // Add this JavaScript for the modal functionality
// const addNewTaskButton = document.querySelector('#new_task');
// const taskModal = document.getElementById('taskModal');
// // var closeBtn = document.querySelector('.close');

// document.addEventListener('DOMContentLoaded', function () {
// 	// closeBtn.addEventListener('click', function () {
// 	// 	taskModal.style.display = 'none';
// 	// });
// 	addNewTaskButton.addEventListener('click', function () {
// 		taskModal.style.display = 'block';

// 	});

// 	// closeBtn.addEventListener('click', function () {
// 	// 	taskModal.style.display = 'none';
// 	// });

// 	// window.addEventListener('click', function (event) {
// 	// 	if (event.target == taskModal) {
// 	// 		taskModal.style.display = 'none';
// 	// 	}
// 	// });
// 	document.getElementById('taskForm').addEventListener('submit', function (event) {
// 		event.preventDefault();
// 		var taskName = document.getElementById('taskName').value;
// 		var deadline = document.getElementById('deadline').value;
// 		var description = document.getElementById('description').value;

// 		// Add the task to the task list or perform any other necessary action
// 		// You can use this data to create a new task item and add it to the task list
// 		// For brevity, the task addition logic is not included here
// 		// You can customize this logic based on your requirements

// 		// Close the modal after adding the task
// 		taskModal.style.display = 'none';
// 	});
// });


// window.addEventListener('click', function(event) {
//   if(event.target == confirmBox) {
//     confirmBox.style.display = 'none';
//   }
// });

window.addEventListener('load', () => {
	var confirmBox = document.getElementById("confirmBox");
	var yesButton = document.getElementById("yesButton");
	var noButton = document.getElementById("noButton");
	// confirmBox.innerHTML = message;
	
	yesButton.addEventListener("click", function () {
		// User clicked "Yes"
		confirmBox.style.display = "none";
	});

	noButton.addEventListener("click", function () {
		// User clicked "No"
		confirmBox.style.display = "none";
	});
	// confirmBox.style.display = "none";
});

function modifySize(container) {
	container.style.height = 'auto';
	container.style.height = container.scrollHeight + 'px';
}