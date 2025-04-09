// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("form-message");

    if (name === "" || email === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
    } else if (!email.includes("@")) {
        message.innerHTML = "Enter a valid email!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";
    }
});

// To-Do List Functionality
document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let taskList = document.getElementById("taskList");

    if (taskValue !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${taskValue} <button class="delete-btn">X</button>`;

        // Add delete functionality
        listItem.querySelector(".delete-btn").addEventListener("click", function() {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear input field
    }
});
