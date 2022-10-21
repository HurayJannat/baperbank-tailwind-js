document.getElementById("btn-submit").addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email === "huray" && password === "dipty")
    {
        console.log("correct password");
    }
    else {
        console.log("wrong password");
    }
})