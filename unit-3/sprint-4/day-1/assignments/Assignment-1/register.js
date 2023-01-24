const form = document.getElementById("registration-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        // Form is valid, save data to LocalStorage
        const uniqueId = document.getElementById("unique-id").value;
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const designation = document.querySelector('input[name="designation"]:checked').value;
        const priority = document.getElementById("priority").value;
        const vaccine = document.getElementById("vaccine").value;
        const data = { uniqueId, name, age, designation, priority, vaccine };
        localStorage.setItem("registration-data", JSON.stringify(data));
        alert("Registration Successful!");
    } else {
        // Form is not valid, display error messages
        const formControls = form.querySelectorAll("[required]");
        formControls.forEach(control => {
            if (!control.checkValidity()) {
                control.classList.add("error");
                const errorMessage = control.nextElementSibling;
                errorMessage.innerHTML = control.validationMessage;
            } else {
                control.classList.remove("error");
            }
        });
    }
}