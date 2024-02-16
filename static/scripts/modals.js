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