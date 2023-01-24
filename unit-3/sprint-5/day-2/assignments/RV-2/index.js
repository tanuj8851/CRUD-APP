function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email: email,
        password: password
    };

    fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.token) {
                localStorage.setItem("token", data.token);
                window.location.href = "home.html";
            } else {
                alert("Invalid email or password");
            }
        });
}