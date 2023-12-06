function loginHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const body = { email, password };

    fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then((res) => {
        window.localStorage.setItem("accessToken", res.accessToken)
        window.location.href = "/recruitment/form.html";
    }).catch((err) => {
        console.log(err)
        alert("Unknown error occurred!");
    });
}

function signupHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confPassword = e.target.elements.confPassword.value;

    if (confPassword !== password) {
        return alert("Passwords do not match!");
    }

    const body = { email, password };

    fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then((res) => {
        console.log(res);
        if (res.status === 200) {
            window.localStorage.setItem("accessToken", res.accessToken)
            alert("Account created successfully!");
            window.location.href = "/recruitment/form.html";
        } else {
            alert("Unknown error occurred!");
        }
    }).catch((err) => {
        console.log(err)
        alert("Unknown error occurred!");
    });
}